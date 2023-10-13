import { ReconnectCallbacks, reconnectWebsocket } from './reconnect-websocket';
import { sleep } from '../src/lib/utils';

describe('reconnectWebsocket', () => {
  it('onOpen and onClose', () => {
    const connections: ReconnectCallbacks = {
      onMessage: message => {},
      onOpen: () => {
      },
      onClose: () => {}
    };

    const onOpenSpy = jest.spyOn(connections, 'onOpen');
    const onCloseSpy = jest.spyOn(connections, 'onClose');

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

    const onOpenSpy = jest.spyOn(connections, 'onOpen');
    const onCloseSpy = jest.spyOn(connections, 'onClose');
    const onErrorSpy = jest.spyOn(connections, 'onError');

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

    const onMessageSpy = jest.spyOn(connections, 'onMessage');

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
