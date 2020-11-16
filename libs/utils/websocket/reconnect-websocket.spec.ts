import { ReconnectCallbacks, reconnectWebsocket } from './reconnect-websocket';
import { sleep } from '@gewd/utils';

describe('reconnectWebsocket', () => {
  it('onOpen and onClose', () => {
    const connections: ReconnectCallbacks = {
      onMessage: message => {},
      onOpen: () => {
      },
      onClose: () => {}
    };

    var onOpenSpy = spyOn(connections, 'onOpen');
    var onCloseSpy = spyOn(connections, 'onClose');

    const customWebSocket: Partial<WebSocket> = {
      close (code?: number, reason?: string) {
        this.onclose();
      }
    };

    const disconnect = reconnectWebsocket('not needed here', connections, undefined, url => customWebSocket as any);

    customWebSocket.onopen.call(null, null);

    expect(onOpenSpy).toHaveBeenCalled();

    disconnect();

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('onError should close it, and try to connect, once', async () => {
    const connections: ReconnectCallbacks = {
      onMessage: message => {},
      onOpen: () => {
      },
      onClose: () => {},
      onError: () => {}
    };

    var onOpenSpy = spyOn(connections, 'onOpen');
    var onCloseSpy = spyOn(connections, 'onClose');
    var onErrorSpy = spyOn(connections, 'onError');

    const customWebSocket: Partial<WebSocket> = {
      close (code?: number, reason?: string) {
        this.onclose();
      }
    };

    let newSocketCalled = 0;

    const disconnect = reconnectWebsocket('not needed here', connections, {
      reconnectTimerMs: 0,
      maxTries: 1
    }, url => {
      newSocketCalled++;

      return customWebSocket as any;
    });

    customWebSocket.onopen.call(null, null);

    expect(onOpenSpy).toHaveBeenCalled();

    customWebSocket.onerror.call(null,[{message: 'broken'}]);

    expect(onErrorSpy).toHaveBeenCalled();
    expect(onCloseSpy).toHaveBeenCalled();

    await sleep(100);

   customWebSocket.onerror.call(null,[{message: 'broken'}]);

    await sleep(100);

    expect(newSocketCalled).toBe(2);
  });

   it('onMessage is called', () => {
    const connections: ReconnectCallbacks = {
      onMessage: message => {},
    };

    var onMessageSpy = spyOn(connections, 'onMessage');

    const customWebSocket: Partial<WebSocket> = {
    };

    const disconnect = reconnectWebsocket('not needed here', connections, {
      reconnectTimerMs: 0,
      maxTries: 1
    }, url => {
      return customWebSocket as any;
    });

    customWebSocket.onmessage.call(null, null);

    expect(onMessageSpy).toHaveBeenCalled();
  });
});
