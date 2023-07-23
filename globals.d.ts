/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  type EachFunc = (this: Context, params: Record<string, any>, done: Done) => void;
  type EachAsyncFunc = (this: Context, params: Record<string, any>) => PromiseLike<any>;

  namespace Mocha {
    interface TestFunction {
      each(
        strings: TemplateStringsArray,
        ...placeholders: any[]
      ): {
        (fn: EachFunc): Test;
        (fn: EachAsyncFunc): Test;
        (title: string, fn?: EachFunc): Test;
        (title: string, fn?: EachAsyncFunc): Test;
      };
    }
  }
}
