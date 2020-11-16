export interface ReconnectCallbacks {
  onMessage: (message: MessageEvent) => void;
  onOpen?: (event: any) => void;
  onError?: (event: any) => void;
  onClose?: (event: any) => void;
  onReconnectProcessStopped?: () => void;
}

export interface ReconnectWebSocketOptions {
  reconnectTimerMs?: number;
  maxTries?: number;
}

/**
 * Creates a self-reconnecting websocket with callbacks
 *
 * @param url Your target Websocket
 * @param callbacks
 * @param options
 * @param customWebSocketConstruct Probably only used for the tests
 */
export function reconnectWebsocket(
  url: string,
  callbacks: ReconnectCallbacks,
  options: ReconnectWebSocketOptions = {
    reconnectTimerMs: 2500
  },
  customWebSocketConstruct = (url: string) => new WebSocket(url)
) {
  let currentWebSocket: WebSocket = null;
  let reconnectEnabled = true;
  let connectionTries = 0;

  const createWebsocket = () => {
    const ws = currentWebSocket = customWebSocketConstruct(url);

    connectionTries++;

    if (typeof options.maxTries === 'number' && options.maxTries < connectionTries) {
      // tried too often
      reconnectEnabled = false;
    }

    ws.onmessage = ev => {
      callbacks.onMessage(ev);
    };

    ws.onopen = ev => {
      if (callbacks.onOpen) {
        callbacks.onOpen(ev);
      }
    };

   ws.onclose = ev => {
      if (callbacks.onClose) {
        callbacks.onClose(ev);
      }

      if (reconnectEnabled) {
        setTimeout(() => createWebsocket(), options.reconnectTimerMs);
      }
    };

    ws.onerror = ev => {
      if (callbacks.onError) {
        callbacks.onError(ev);
      }

      ws.close();
    };
  }

  createWebsocket();

  return () => {
    reconnectEnabled = false;

    if (currentWebSocket) {
      currentWebSocket.close()
    }
  }
}
