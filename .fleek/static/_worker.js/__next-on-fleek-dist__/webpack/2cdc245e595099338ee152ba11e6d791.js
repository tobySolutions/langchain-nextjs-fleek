// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_6841"] = (e, t, r) => {
    r.r(t), r.d(t, { SaveableVectorStore: () => o, VectorStore: () => s, VectorStoreRetriever: () => n });
    var a = r(4786), i = r(3686);
    class n extends a.BaseRetriever {
      static lc_name() {
        return "VectorStoreRetriever";
      }
      get lc_namespace() {
        return ["langchain_core", "vectorstores"];
      }
      _vectorstoreType() {
        return this.vectorStore._vectorstoreType();
      }
      constructor(e2) {
        super(e2), Object.defineProperty(this, "vectorStore", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "k", { enumerable: true, configurable: true, writable: true, value: 4 }), Object.defineProperty(this, "searchType", { enumerable: true, configurable: true, writable: true, value: "similarity" }), Object.defineProperty(this, "searchKwargs", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "filter", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.vectorStore = e2.vectorStore, this.k = e2.k ?? this.k, this.searchType = e2.searchType ?? this.searchType, this.filter = e2.filter, "mmr" === e2.searchType && (this.searchKwargs = e2.searchKwargs);
      }
      async _getRelevantDocuments(e2, t2) {
        if ("mmr" === this.searchType) {
          if ("function" != typeof this.vectorStore.maxMarginalRelevanceSearch)
            throw Error(`The vector store backing this retriever, ${this._vectorstoreType()} does not support max marginal relevance search.`);
          return this.vectorStore.maxMarginalRelevanceSearch(e2, { k: this.k, filter: this.filter, ...this.searchKwargs }, t2?.getChild("vectorstore"));
        }
        return this.vectorStore.similaritySearch(e2, this.k, this.filter, t2?.getChild("vectorstore"));
      }
      async addDocuments(e2, t2) {
        return this.vectorStore.addDocuments(e2, t2);
      }
    }
    class s extends i.Serializable {
      constructor(e2, t2) {
        super(t2), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain", "vectorstores", this._vectorstoreType()] }), Object.defineProperty(this, "embeddings", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.embeddings = e2;
      }
      async delete(e2) {
        throw Error("Not implemented.");
      }
      async similaritySearch(e2, t2 = 4, r2, a2) {
        return (await this.similaritySearchVectorWithScore(await this.embeddings.embedQuery(e2), t2, r2)).map((e3) => e3[0]);
      }
      async similaritySearchWithScore(e2, t2 = 4, r2, a2) {
        return this.similaritySearchVectorWithScore(await this.embeddings.embedQuery(e2), t2, r2);
      }
      static fromTexts(e2, t2, r2, a2) {
        throw Error("the Langchain vectorstore implementation you are using forgot to override this, please report a bug");
      }
      static fromDocuments(e2, t2, r2) {
        throw Error("the Langchain vectorstore implementation you are using forgot to override this, please report a bug");
      }
      asRetriever(e2, t2, r2, a2, i2, s2) {
        if ("number" == typeof e2)
          return new n({ vectorStore: this, k: e2, filter: t2, tags: [...a2 ?? [], this._vectorstoreType()], metadata: i2, verbose: s2, callbacks: r2 });
        {
          let t3 = { vectorStore: this, k: e2?.k, filter: e2?.filter, tags: [...e2?.tags ?? [], this._vectorstoreType()], metadata: e2?.metadata, verbose: e2?.verbose, callbacks: e2?.callbacks, searchType: e2?.searchType };
          return new n(e2?.searchType === "mmr" ? { ...t3, searchKwargs: e2.searchKwargs } : { ...t3 });
        }
      }
    }
    class o extends s {
      static load(e2, t2) {
        throw Error("Not implemented");
      }
    }
  };
  __namedExportsObject["__chunk_4748"] = (e, t, r) => {
    r.d(t, { S: () => a });
    function a(e2, t2) {
      let r2 = 0, a2 = 0, i = 0;
      for (let n = 0; n < e2.length; n++)
        r2 += e2[n] * t2[n], a2 += e2[n] * e2[n], i += t2[n] * t2[n];
      return r2 / (Math.sqrt(a2) * Math.sqrt(i));
    }
  };
  __namedExportsObject["__chunk_9966"] = (e, t, r) => {
    r.r(t), r.d(t, { cosineSimilarity: () => c, euclideanDistance: () => h, innerProduct: () => l, matrixFunc: () => s, maximalMarginalRelevance: () => u, normalize: () => o });
    var a = r(4748);
    function i(e2, t2) {
      let r2 = 0;
      for (let a2 = 0; a2 < e2.length; a2++)
        r2 += e2[a2] * t2[a2];
      return r2;
    }
    function n(e2, t2) {
      return Math.sqrt(function(e3, t3) {
        let r2 = 0;
        for (let a2 = 0; a2 < e3.length; a2++)
          r2 += (e3[a2] - t3[a2]) * (e3[a2] - t3[a2]);
        return r2;
      }(e2, t2));
    }
    function s(e2, t2, r2) {
      if (0 === e2.length || 0 === e2[0].length || 0 === t2.length || 0 === t2[0].length)
        return [[]];
      if (e2[0].length !== t2[0].length)
        throw Error(`Number of columns in X and Y must be the same. X has shape ${[e2.length, e2[0].length]} and Y has shape ${[t2.length, t2[0].length]}.`);
      return e2.map((e3) => t2.map((t3) => r2(e3, t3)).map((e4) => Number.isNaN(e4) ? 0 : e4));
    }
    function o(e2, t2 = false) {
      let r2 = e2.reduce((e3, t3) => Math.max(e3, m(t3).maxValue), 0);
      return e2.map((e3) => e3.map((e4) => t2 ? 1 - e4 / r2 : e4 / r2));
    }
    function c(e2, t2) {
      return s(e2, t2, a.S);
    }
    function l(e2, t2) {
      return s(e2, t2, i);
    }
    function h(e2, t2) {
      return s(e2, t2, n);
    }
    function u(e2, t2, r2 = 0.5, a2 = 4) {
      if (0 >= Math.min(a2, t2.length))
        return [];
      let i2 = c(Array.isArray(e2[0]) ? e2 : [e2], t2)[0], n2 = m(i2).maxIndex, s2 = [t2[n2]], o2 = [n2];
      for (; o2.length < Math.min(a2, t2.length); ) {
        let e3 = -1 / 0, a3 = -1, n3 = c(t2, s2);
        i2.forEach((t3, i3) => {
          if (o2.includes(i3))
            return;
          let s3 = r2 * t3 - (1 - r2) * Math.max(...n3[i3]);
          s3 > e3 && (e3 = s3, a3 = i3);
        }), s2.push(t2[a3]), o2.push(a3);
      }
      return o2;
    }
    function m(e2) {
      if (0 === e2.length)
        return { maxIndex: -1, maxValue: NaN };
      let t2 = e2[0], r2 = 0;
      for (let a2 = 1; a2 < e2.length; a2 += 1)
        e2[a2] > t2 && (r2 = a2, t2 = e2[a2]);
      return { maxIndex: r2, maxValue: t2 };
    }
  };
  __namedExportsObject["__chunk_4786"] = (e, t, r) => {
    r.r(t), r.d(t, { BaseRetriever: () => s });
    var a = r(112), i = r(1184), n = r(3735);
    class s extends i.eq {
      constructor(e2) {
        super(e2), Object.defineProperty(this, "callbacks", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tags", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "metadata", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "verbose", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.callbacks = e2?.callbacks, this.tags = e2?.tags ?? [], this.metadata = e2?.metadata ?? {}, this.verbose = e2?.verbose ?? false;
      }
      _getRelevantDocuments(e2, t2) {
        throw Error("Not implemented!");
      }
      async invoke(e2, t2) {
        return this.getRelevantDocuments(e2, (0, n.LE)(t2));
      }
      async getRelevantDocuments(e2, t2) {
        let r2 = (0, n.LE)((0, a.parseCallbackConfigArg)(t2)), i2 = await a.CallbackManager.configure(r2.callbacks, this.callbacks, r2.tags, this.tags, r2.metadata, this.metadata, { verbose: this.verbose }), s2 = await i2?.handleRetrieverStart(this.toJSON(), e2, r2.runId, void 0, void 0, void 0, r2.runName);
        try {
          let t3 = await this._getRelevantDocuments(e2, s2);
          return await s2?.handleRetrieverEnd(t3), t3;
        } catch (e3) {
          throw await s2?.handleRetrieverError(e3), e3;
        }
      }
    }
  };
  __namedExportsObject["__chunk_860"] = (e, t, r) => {
    r.r(t), r.d(t, { BaseDocumentTransformer: () => n, Document: () => a.B, MappingDocumentTransformer: () => s });
    var a = r(2534), i = r(1184);
    class n extends i.eq {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "documents", "transformers"] });
      }
      invoke(e2, t2) {
        return this.transformDocuments(e2);
      }
    }
    class s extends n {
      async transformDocuments(e2) {
        let t2 = [];
        for (let r2 of e2) {
          let e3 = await this._transformDocument(r2);
          t2.push(e3);
        }
        return t2;
      }
    }
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
