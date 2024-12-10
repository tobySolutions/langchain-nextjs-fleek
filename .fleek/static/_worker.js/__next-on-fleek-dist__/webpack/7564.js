// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_7564"] = (e, t, r) => {
    r.r(t), r.d(t, { BaseExampleSelector: () => n, BasePromptSelector: () => s, ConditionalPromptSelector: () => a, LengthBasedExampleSelector: () => u, SemanticSimilarityExampleSelector: () => p, isChatModel: () => l, isLLM: () => o });
    var i = r(3686);
    class n extends i.Serializable {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "example_selectors", "base"] });
      }
    }
    class s {
      async getPromptAsync(e2, t2) {
        return this.getPrompt(e2).partial(t2?.partialVariables ?? {});
      }
    }
    class a extends s {
      constructor(e2, t2 = []) {
        super(), Object.defineProperty(this, "defaultPrompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "conditionals", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.defaultPrompt = e2, this.conditionals = t2;
      }
      getPrompt(e2) {
        for (let [t2, r2] of this.conditionals)
          if (t2(e2))
            return r2;
        return this.defaultPrompt;
      }
    }
    function o(e2) {
      return "base_llm" === e2._modelType();
    }
    function l(e2) {
      return "base_chat_model" === e2._modelType();
    }
    function c(e2) {
      return e2.split(/\n| /).length;
    }
    class u extends n {
      constructor(e2) {
        super(e2), Object.defineProperty(this, "examples", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "examplePrompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "getTextLength", { enumerable: true, configurable: true, writable: true, value: c }), Object.defineProperty(this, "maxLength", { enumerable: true, configurable: true, writable: true, value: 2048 }), Object.defineProperty(this, "exampleTextLengths", { enumerable: true, configurable: true, writable: true, value: [] }), this.examplePrompt = e2.examplePrompt, this.maxLength = e2.maxLength ?? 2048, this.getTextLength = e2.getTextLength ?? c;
      }
      async addExample(e2) {
        this.examples.push(e2);
        let t2 = await this.examplePrompt.format(e2);
        this.exampleTextLengths.push(this.getTextLength(t2));
      }
      async calculateExampleTextLengths(e2, t2) {
        if (e2.length > 0)
          return e2;
        let { examples: r2, examplePrompt: i2 } = t2;
        return (await Promise.all(r2.map((e3) => i2.format(e3)))).map((e3) => this.getTextLength(e3));
      }
      async selectExamples(e2) {
        let t2 = Object.values(e2).join(" "), r2 = this.maxLength - this.getTextLength(t2), i2 = 0, n2 = [];
        for (; r2 > 0 && i2 < this.examples.length; ) {
          let e3 = r2 - this.exampleTextLengths[i2];
          if (e3 < 0)
            break;
          n2.push(this.examples[i2]), r2 = e3, i2 += 1;
        }
        return n2;
      }
      static async fromExamples(e2, t2) {
        let r2 = new u(t2);
        return await Promise.all(e2.map((e3) => r2.addExample(e3))), r2;
      }
    }
    var h = r(2534);
    function d(e2) {
      return Object.keys(e2).sort().map((t2) => e2[t2]);
    }
    class p extends n {
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "vectorStoreRetriever", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "exampleKeys", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "inputKeys", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.exampleKeys = e2.exampleKeys, this.inputKeys = e2.inputKeys, void 0 !== e2.vectorStore)
          this.vectorStoreRetriever = e2.vectorStore.asRetriever({ k: e2.k ?? 4, filter: e2.filter });
        else if (e2.vectorStoreRetriever)
          this.vectorStoreRetriever = e2.vectorStoreRetriever;
        else
          throw Error('You must specify one of "vectorStore" and "vectorStoreRetriever".');
      }
      async addExample(e2) {
        let t2 = d((this.inputKeys ?? Object.keys(e2)).reduce((t3, r2) => ({ ...t3, [r2]: e2[r2] }), {})).join(" ");
        await this.vectorStoreRetriever.addDocuments([new h.B({ pageContent: t2, metadata: e2 })]);
      }
      async selectExamples(e2) {
        let t2 = d((this.inputKeys ?? Object.keys(e2)).reduce((t3, r3) => ({ ...t3, [r3]: e2[r3] }), {})).join(" "), r2 = (await this.vectorStoreRetriever.invoke(t2)).map((e3) => e3.metadata);
        return this.exampleKeys ? r2.map((e3) => this.exampleKeys.reduce((t3, r3) => ({ ...t3, [r3]: e3[r3] }), {})) : r2;
      }
      static async fromExamples(e2, t2, r2, i2 = {}) {
        let n2 = i2.inputKeys ?? null, s2 = e2.map((e3) => d(n2 ? n2.reduce((t3, r3) => ({ ...t3, [r3]: e3[r3] }), {}) : e3).join(" "));
        return new p({ vectorStore: await r2.fromTexts(s2, e2, t2, i2), k: i2.k ?? 4, exampleKeys: i2.exampleKeys, inputKeys: i2.inputKeys });
      }
    }
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
