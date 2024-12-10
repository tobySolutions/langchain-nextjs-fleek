// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_2886"] = (e, t, r) => {
    r.d(t, { jz: () => rY });
    var i, n, s = {};
    r.r(s);
    var a = {};
    r.r(a), r.d(a, { BaseChatMessageHistory: () => L, BaseListChatMessageHistory: () => D, InMemoryChatMessageHistory: () => W });
    var o = {};
    r.r(o), r.d(o, { BaseMemory: () => U, getInputValue: () => H, getOutputValue: () => J, getPromptInputKey: () => Q });
    var l = {};
    r.r(l), r.d(l, { BaseStore: () => ei, InMemoryStore: () => en });
    var c = {};
    r.r(c), r.d(c, { LangChainTracerV1: () => eh });
    var u = {};
    r.r(u), r.d(u, { getTracingCallbackHandler: () => ed, getTracingV2CallbackHandler: () => ep });
    var h = {};
    r.r(h), r.d(h, { RunCollectorCallbackHandler: () => eb });
    var d = {};
    r.r(d), r.d(d, { Validator: () => e_.cX, deepCompareStrict: () => e_.hh });
    var p = {};
    r.r(p), r.d(p, { FakeChatMessageHistory: () => eL, FakeChatModel: () => eT, FakeEmbeddings: () => eK, FakeLLM: () => eN, FakeListChatMessageHistory: () => eD, FakeListChatModel: () => eM, FakeRetriever: () => eI, FakeRunnable: () => ex, FakeSplitIntoListParser: () => eA, FakeStreamingChatModel: () => eR, FakeStreamingLLM: () => e$, FakeTool: () => eV, FakeTracer: () => eW, FakeVectorStore: () => eF, SingleRunExtractor: () => eB, SyntheticEmbeddings: () => eG });
    var f = {};
    r.r(f), r.d(f, { isZodSchema: () => eU.F });
    var b = {};
    r.r(b), r.d(b, { agents: () => s, caches: () => $, callbacks__base: () => T, callbacks__manager: () => R, callbacks__promises: () => I, chat_history: () => a, documents: () => V, embeddings: () => K, example_selectors: () => G, language_models__base: () => B, language_models__chat_models: () => F, language_models__llms: () => q, load__serializable: () => x, memory: () => o, messages: () => M, output_parsers: () => Y, outputs: () => Z, prompt_values: () => ee, prompts: () => X, retrievers: () => er, runnables: () => et, stores: () => l, tools: () => es, tracers__base: () => ea, tracers__console: () => eo, tracers__initialize: () => u, tracers__log_stream: () => ef, tracers__run_collector: () => h, tracers__tracer_langchain: () => el, tracers__tracer_langchain_v1: () => c, utils__async_caller: () => eg, utils__chunk_array: () => em, utils__env: () => eu, utils__function_calling: () => ey, utils__hash: () => ev, utils__json_patch: () => ew, utils__json_schema: () => d, utils__math: () => ek, utils__stream: () => eO, utils__testing: () => p, utils__tiktoken: () => eq, utils__types: () => f, vectorstores: () => eE });
    var g = r(3050), m = r(8762), y = r(5133), v = 0, w = 0;
    let _ = function(e10, t10, r2) {
      var s2 = t10 && r2 || 0, a2 = t10 || Array(16), o2 = (e10 = e10 || {}).node, l2 = e10.clockseq;
      if (e10._v6 || (o2 || (o2 = i), null != l2 || (l2 = n)), null == o2 || null == l2) {
        var c2 = e10.random || (e10.rng || y.Z)();
        null != o2 || (o2 = [c2[0], c2[1], c2[2], c2[3], c2[4], c2[5]], i || e10._v6 || (o2[0] |= 1, i = o2)), null != l2 || (l2 = (c2[6] << 8 | c2[7]) & 16383, void 0 !== n || e10._v6 || (n = l2));
      }
      var u2 = void 0 !== e10.msecs ? e10.msecs : Date.now(), h2 = void 0 !== e10.nsecs ? e10.nsecs : w + 1, d2 = u2 - v + (h2 - w) / 1e4;
      if (d2 < 0 && void 0 === e10.clockseq && (l2 = l2 + 1 & 16383), (d2 < 0 || u2 > v) && void 0 === e10.nsecs && (h2 = 0), h2 >= 1e4)
        throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
      v = u2, w = h2, n = l2;
      var p2 = ((268435455 & (u2 += 122192928e5)) * 1e4 + h2) % 4294967296;
      a2[s2++] = p2 >>> 24 & 255, a2[s2++] = p2 >>> 16 & 255, a2[s2++] = p2 >>> 8 & 255, a2[s2++] = 255 & p2;
      var f2 = u2 / 4294967296 * 1e4 & 268435455;
      a2[s2++] = f2 >>> 8 & 255, a2[s2++] = 255 & f2, a2[s2++] = f2 >>> 24 & 15 | 16, a2[s2++] = f2 >>> 16 & 255, a2[s2++] = l2 >>> 8 | 128, a2[s2++] = 255 & l2;
      for (var b2 = 0; b2 < 6; ++b2)
        a2[s2 + b2] = o2[b2];
      return t10 || (0, m.S)(a2);
    };
    var k = r(8212);
    let O = function(e10) {
      if (!(0, k.Z)(e10))
        throw TypeError("Invalid UUID");
      var t10, r2 = new Uint8Array(16);
      return r2[0] = (t10 = parseInt(e10.slice(0, 8), 16)) >>> 24, r2[1] = t10 >>> 16 & 255, r2[2] = t10 >>> 8 & 255, r2[3] = 255 & t10, r2[4] = (t10 = parseInt(e10.slice(9, 13), 16)) >>> 8, r2[5] = 255 & t10, r2[6] = (t10 = parseInt(e10.slice(14, 18), 16)) >>> 8, r2[7] = 255 & t10, r2[8] = (t10 = parseInt(e10.slice(19, 23), 16)) >>> 8, r2[9] = 255 & t10, r2[10] = (t10 = parseInt(e10.slice(24, 36), 16)) / 1099511627776 & 255, r2[11] = t10 / 4294967296 & 255, r2[12] = t10 >>> 24 & 255, r2[13] = t10 >>> 16 & 255, r2[14] = t10 >>> 8 & 255, r2[15] = 255 & t10, r2;
    };
    function j(e10, t10) {
      var r2 = Object.keys(e10);
      if (Object.getOwnPropertySymbols) {
        var i2 = Object.getOwnPropertySymbols(e10);
        t10 && (i2 = i2.filter(function(t11) {
          return Object.getOwnPropertyDescriptor(e10, t11).enumerable;
        })), r2.push.apply(r2, i2);
      }
      return r2;
    }
    function P(e10) {
      for (var t10 = 1; t10 < arguments.length; t10++) {
        var r2 = null != arguments[t10] ? arguments[t10] : {};
        t10 % 2 ? j(Object(r2), true).forEach(function(t11) {
          var i2, n2;
          i2 = t11, n2 = r2[t11], (i2 = function(e11) {
            var t12 = function(e12, t13) {
              if ("object" != typeof e12 || !e12)
                return e12;
              var r3 = e12[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var i3 = r3.call(e12, t13 || "default");
                if ("object" != typeof i3)
                  return i3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t13 ? String : Number)(e12);
            }(e11, "string");
            return "symbol" == typeof t12 ? t12 : t12 + "";
          }(i2)) in e10 ? Object.defineProperty(e10, i2, { value: n2, enumerable: true, configurable: true, writable: true }) : e10[i2] = n2;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(r2)) : j(Object(r2)).forEach(function(t11) {
          Object.defineProperty(e10, t11, Object.getOwnPropertyDescriptor(r2, t11));
        });
      }
      return e10;
    }
    function S(e10, t10) {
      return e10 << t10 | e10 >>> 32 - t10;
    }
    var E = function(e10, t10, r2) {
      function i2(e11, t11, i3, n2) {
        if ("string" == typeof e11 && (e11 = function(e12) {
          e12 = unescape(encodeURIComponent(e12));
          for (var t12 = [], r3 = 0; r3 < e12.length; ++r3)
            t12.push(e12.charCodeAt(r3));
          return t12;
        }(e11)), "string" == typeof t11 && (t11 = O(t11)), (null === (s2 = t11) || void 0 === s2 ? void 0 : s2.length) !== 16)
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var s2, a2 = new Uint8Array(16 + e11.length);
        if (a2.set(t11), a2.set(e11, t11.length), (a2 = r2(a2))[6] = 15 & a2[6] | 80, a2[8] = 63 & a2[8] | 128, i3) {
          n2 = n2 || 0;
          for (var o2 = 0; o2 < 16; ++o2)
            i3[n2 + o2] = a2[o2];
          return i3;
        }
        return (0, m.S)(a2);
      }
      try {
        i2.name = "v5";
      } catch (e11) {
      }
      return i2.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", i2.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", i2;
    }(0, 0, function(e10) {
      var t10 = [1518500249, 1859775393, 2400959708, 3395469782], r2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof e10) {
        var i2 = unescape(encodeURIComponent(e10));
        e10 = [];
        for (var n2 = 0; n2 < i2.length; ++n2)
          e10.push(i2.charCodeAt(n2));
      } else
        Array.isArray(e10) || (e10 = Array.prototype.slice.call(e10));
      e10.push(128);
      for (var s2 = Math.ceil((e10.length / 4 + 2) / 16), a2 = Array(s2), o2 = 0; o2 < s2; ++o2) {
        for (var l2 = new Uint32Array(16), c2 = 0; c2 < 16; ++c2)
          l2[c2] = e10[64 * o2 + 4 * c2] << 24 | e10[64 * o2 + 4 * c2 + 1] << 16 | e10[64 * o2 + 4 * c2 + 2] << 8 | e10[64 * o2 + 4 * c2 + 3];
        a2[o2] = l2;
      }
      a2[s2 - 1][14] = (e10.length - 1) * 8 / 4294967296, a2[s2 - 1][14] = Math.floor(a2[s2 - 1][14]), a2[s2 - 1][15] = (e10.length - 1) * 8 & 4294967295;
      for (var u2 = 0; u2 < s2; ++u2) {
        for (var h2 = new Uint32Array(80), d2 = 0; d2 < 16; ++d2)
          h2[d2] = a2[u2][d2];
        for (var p2 = 16; p2 < 80; ++p2)
          h2[p2] = S(h2[p2 - 3] ^ h2[p2 - 8] ^ h2[p2 - 14] ^ h2[p2 - 16], 1);
        for (var f2 = r2[0], b2 = r2[1], g2 = r2[2], m2 = r2[3], y2 = r2[4], v2 = 0; v2 < 80; ++v2) {
          var w2 = Math.floor(v2 / 20), _2 = S(f2, 5) + function(e11, t11, r3, i3) {
            switch (e11) {
              case 0:
                return t11 & r3 ^ ~t11 & i3;
              case 1:
              case 3:
                return t11 ^ r3 ^ i3;
              case 2:
                return t11 & r3 ^ t11 & i3 ^ r3 & i3;
            }
          }(w2, b2, g2, m2) + y2 + t10[w2] + h2[v2] >>> 0;
          y2 = m2, m2 = g2, g2 = S(b2, 30) >>> 0, b2 = f2, f2 = _2;
        }
        r2[0] = r2[0] + f2 >>> 0, r2[1] = r2[1] + b2 >>> 0, r2[2] = r2[2] + g2 >>> 0, r2[3] = r2[3] + m2 >>> 0, r2[4] = r2[4] + y2 >>> 0;
      }
      return [r2[0] >> 24 & 255, r2[0] >> 16 & 255, r2[0] >> 8 & 255, 255 & r2[0], r2[1] >> 24 & 255, r2[1] >> 16 & 255, r2[1] >> 8 & 255, 255 & r2[1], r2[2] >> 24 & 255, r2[2] >> 16 & 255, r2[2] >> 8 & 255, 255 & r2[2], r2[3] >> 24 & 255, r2[3] >> 16 & 255, r2[3] >> 8 & 255, 255 & r2[3], r2[4] >> 24 & 255, r2[4] >> 16 & 255, r2[4] >> 8 & 255, 255 & r2[4]];
    });
    function C(e10) {
      return function(e11 = {}, t10, r2 = 0) {
        var i2, n2, s2 = _(P(P({}, e11), {}, { _v6: true }), new Uint8Array(16));
        return n2 = function(e12, t11 = false) {
          return Uint8Array.of((15 & e12[6]) << 4 | e12[7] >> 4 & 15, (15 & e12[7]) << 4 | (240 & e12[4]) >> 4, (15 & e12[4]) << 4 | (240 & e12[5]) >> 4, (15 & e12[5]) << 4 | (240 & e12[0]) >> 4, (15 & e12[0]) << 4 | (240 & e12[1]) >> 4, (15 & e12[1]) << 4 | (240 & e12[2]) >> 4, 96 | 15 & e12[2], e12[3], e12[8], e12[9], e12[10], e12[11], e12[12], e12[13], e12[14], e12[15]);
        }("string" == typeof (i2 = s2) ? O(i2) : i2), s2 = "string" == typeof i2 ? (0, m.S)(n2) : n2, (0, m.S)(s2);
      }({ clockseq: e10 });
    }
    function A(e10, t10) {
      return E(e10, new Uint8Array(t10.replace(/-/g, "").match(/.{2}/g).map((e11) => parseInt(e11, 16))));
    }
    var x = r(3686);
    let N = [];
    var $ = r(7783), T = r(7250), R = r(112), I = r(755), M = r(9730);
    class L extends x.Serializable {
      async addMessages(e10) {
        for (let t10 of e10)
          await this.addMessage(t10);
      }
    }
    class D extends x.Serializable {
      addUserMessage(e10) {
        return this.addMessage(new M.HumanMessage(e10));
      }
      addAIChatMessage(e10) {
        return this.addMessage(new M.AIMessage(e10));
      }
      addAIMessage(e10) {
        return this.addMessage(new M.AIMessage(e10));
      }
      async addMessages(e10) {
        for (let t10 of e10)
          await this.addMessage(t10);
      }
      clear() {
        throw Error("Not implemented.");
      }
    }
    class W extends D {
      constructor(e10) {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain", "stores", "message", "in_memory"] }), Object.defineProperty(this, "messages", { enumerable: true, configurable: true, writable: true, value: [] }), this.messages = e10 ?? [];
      }
      async getMessages() {
        return this.messages;
      }
      async addMessage(e10) {
        this.messages.push(e10);
      }
      async clear() {
        this.messages = [];
      }
    }
    var V = r(860), K = r(7714), G = r(7564), B = r(8718), F = r(4220), q = r(7418);
    class U {
    }
    let z = (e10, t10) => {
      if (void 0 !== t10)
        return e10[t10];
      let r2 = Object.keys(e10);
      if (1 === r2.length)
        return e10[r2[0]];
    }, H = (e10, t10) => {
      let r2 = z(e10, t10);
      if (!r2) {
        let t11 = Object.keys(e10);
        throw Error(`input values have ${t11.length} keys, you must specify an input key or pass only 1 key as input`);
      }
      return r2;
    }, J = (e10, t10) => {
      let r2 = z(e10, t10);
      if (!r2 && "" !== r2) {
        let t11 = Object.keys(e10);
        throw Error(`output values have ${t11.length} keys, you must specify an output key or pass only 1 key as output`);
      }
      return r2;
    };
    function Q(e10, t10) {
      let r2 = Object.keys(e10).filter((e11) => !t10.includes(e11) && "stop" !== e11);
      if (1 !== r2.length)
        throw Error(`One input key expected, but got ${r2.length}`);
      return r2[0];
    }
    var Y = r(1272), Z = r(3926), X = r(2838), ee = r(4135), et = r(3874), er = r(4786);
    class ei extends x.Serializable {
    }
    class en extends ei {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain", "storage"] }), Object.defineProperty(this, "store", { enumerable: true, configurable: true, writable: true, value: {} });
      }
      async mget(e10) {
        return e10.map((e11) => this.store[e11]);
      }
      async mset(e10) {
        for (let [t10, r2] of e10)
          this.store[t10] = r2;
      }
      async mdelete(e10) {
        for (let t10 of e10)
          delete this.store[t10];
      }
      async *yieldKeys(e10) {
        for (let t10 of Object.keys(this.store))
          (void 0 === e10 || t10.startsWith(e10)) && (yield t10);
      }
    }
    var es = r(5434), ea = r(9321), eo = r(7997), el = r(9205), ec = r(6131), eu = r(5266);
    class eh extends ea.BaseTracer {
      constructor() {
        super(), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "langchain_tracer" }), Object.defineProperty(this, "endpoint", { enumerable: true, configurable: true, writable: true, value: (0, eu.getEnvironmentVariable)("LANGCHAIN_ENDPOINT") || "http://localhost:1984" }), Object.defineProperty(this, "headers", { enumerable: true, configurable: true, writable: true, value: { "Content-Type": "application/json" } }), Object.defineProperty(this, "session", { enumerable: true, configurable: true, writable: true, value: void 0 });
        let e10 = (0, eu.getEnvironmentVariable)("LANGCHAIN_API_KEY");
        e10 && (this.headers["x-api-key"] = e10);
      }
      async newSession(e10) {
        let t10 = { start_time: Date.now(), name: e10 }, r2 = await this.persistSession(t10);
        return this.session = r2, r2;
      }
      async loadSession(e10) {
        let t10 = `${this.endpoint}/sessions?name=${e10}`;
        return this._handleSessionResponse(t10);
      }
      async loadDefaultSession() {
        let e10 = `${this.endpoint}/sessions?name=default`;
        return this._handleSessionResponse(e10);
      }
      async convertV2RunToRun(e10) {
        let t10;
        let r2 = this.session ?? await this.loadDefaultSession(), i2 = e10.serialized;
        if ("llm" === e10.run_type) {
          let n2 = e10.inputs.prompts ? e10.inputs.prompts : e10.inputs.messages.map((e11) => (0, ec.zs)(e11));
          t10 = { uuid: e10.id, start_time: e10.start_time, end_time: e10.end_time, execution_order: e10.execution_order, child_execution_order: e10.child_execution_order, serialized: i2, type: e10.run_type, session_id: r2.id, prompts: n2, response: e10.outputs };
        } else if ("chain" === e10.run_type) {
          let n2 = await Promise.all(e10.child_runs.map((e11) => this.convertV2RunToRun(e11)));
          t10 = { uuid: e10.id, start_time: e10.start_time, end_time: e10.end_time, execution_order: e10.execution_order, child_execution_order: e10.child_execution_order, serialized: i2, type: e10.run_type, session_id: r2.id, inputs: e10.inputs, outputs: e10.outputs, child_llm_runs: n2.filter((e11) => "llm" === e11.type), child_chain_runs: n2.filter((e11) => "chain" === e11.type), child_tool_runs: n2.filter((e11) => "tool" === e11.type) };
        } else if ("tool" === e10.run_type) {
          let n2 = await Promise.all(e10.child_runs.map((e11) => this.convertV2RunToRun(e11)));
          t10 = { uuid: e10.id, start_time: e10.start_time, end_time: e10.end_time, execution_order: e10.execution_order, child_execution_order: e10.child_execution_order, serialized: i2, type: e10.run_type, session_id: r2.id, tool_input: e10.inputs.input, output: e10.outputs?.output, action: JSON.stringify(i2), child_llm_runs: n2.filter((e11) => "llm" === e11.type), child_chain_runs: n2.filter((e11) => "chain" === e11.type), child_tool_runs: n2.filter((e11) => "tool" === e11.type) };
        } else
          throw Error(`Unknown run type: ${e10.run_type}`);
        return t10;
      }
      async persistRun(e10) {
        let t10, r2;
        t10 = "llm" === (r2 = void 0 !== e10.run_type ? await this.convertV2RunToRun(e10) : e10).type ? `${this.endpoint}/llm-runs` : "chain" === r2.type ? `${this.endpoint}/chain-runs` : `${this.endpoint}/tool-runs`;
        let i2 = await fetch(t10, { method: "POST", headers: this.headers, body: JSON.stringify(r2) });
        i2.ok || console.error(`Failed to persist run: ${i2.status} ${i2.statusText}`);
      }
      async persistSession(e10) {
        let t10 = `${this.endpoint}/sessions`, r2 = await fetch(t10, { method: "POST", headers: this.headers, body: JSON.stringify(e10) });
        return r2.ok ? { id: (await r2.json()).id, ...e10 } : (console.error(`Failed to persist session: ${r2.status} ${r2.statusText}, using default session.`), { id: 1, ...e10 });
      }
      async _handleSessionResponse(e10) {
        let t10;
        let r2 = await fetch(e10, { method: "GET", headers: this.headers });
        if (!r2.ok)
          return console.error(`Failed to load session: ${r2.status} ${r2.statusText}`), t10 = { id: 1, start_time: Date.now() }, this.session = t10, t10;
        let i2 = await r2.json();
        return 0 === i2.length ? t10 = { id: 1, start_time: Date.now() } : [t10] = i2, this.session = t10, t10;
      }
    }
    async function ed(e10) {
      let t10 = new eh();
      return e10 ? await t10.loadSession(e10) : await t10.loadDefaultSession(), t10;
    }
    async function ep() {
      return new el.LangChainTracer();
    }
    var ef = r(9593);
    class eb extends ea.BaseTracer {
      constructor({ exampleId: e10 } = {}) {
        super({ _awaitHandler: true }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "run_collector" }), Object.defineProperty(this, "exampleId", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tracedRuns", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.exampleId = e10, this.tracedRuns = [];
      }
      async persistRun(e10) {
        let t10 = { ...e10 };
        t10.reference_example_id = this.exampleId, this.tracedRuns.push(t10);
      }
    }
    var eg = r(1550), em = r(6890), ey = r(4194), ev = r(2110), ew = r(349), e_ = r(2003), ek = r(9966), eO = r(541), ej = r(2534), eP = r(2811), eS = r(1184), eE = r(6841), eC = r(4748);
    class eA extends eP.bI {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["tests", "fake"] });
      }
      getFormatInstructions() {
        return "";
      }
      async parse(e10) {
        return e10.split(",").map((e11) => e11.trim());
      }
    }
    class ex extends eS.eq {
      constructor(e10) {
        super(e10), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["tests", "fake"] }), Object.defineProperty(this, "returnOptions", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.returnOptions = e10.returnOptions;
      }
      async invoke(e10, t10) {
        return this.returnOptions ? t10 ?? {} : { input: e10 };
      }
    }
    class eN extends q.LLM {
      constructor(e10) {
        super(e10), Object.defineProperty(this, "response", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thrownErrorString", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.response = e10.response, this.thrownErrorString = e10.thrownErrorString;
      }
      _llmType() {
        return "fake";
      }
      async _call(e10, t10, r2) {
        if (this.thrownErrorString)
          throw Error(this.thrownErrorString);
        let i2 = this.response ?? e10;
        return await r2?.handleLLMNewToken(i2), i2;
      }
    }
    class e$ extends q.LLM {
      constructor(e10) {
        super(e10), Object.defineProperty(this, "sleep", { enumerable: true, configurable: true, writable: true, value: 50 }), Object.defineProperty(this, "responses", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thrownErrorString", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.sleep = e10.sleep ?? this.sleep, this.responses = e10.responses, this.thrownErrorString = e10.thrownErrorString;
      }
      _llmType() {
        return "fake";
      }
      async _call(e10) {
        if (this.thrownErrorString)
          throw Error(this.thrownErrorString);
        let t10 = this.responses?.[0];
        return this.responses = this.responses?.slice(1), t10 ?? e10;
      }
      async *_streamResponseChunks(e10, t10, r2) {
        if (this.thrownErrorString)
          throw Error(this.thrownErrorString);
        let i2 = this.responses?.[0];
        for (let t11 of (this.responses = this.responses?.slice(1), i2 ?? e10))
          await new Promise((e11) => setTimeout(e11, this.sleep)), yield { text: t11, generationInfo: {} }, await r2?.handleLLMNewToken(t11);
      }
    }
    class eT extends F.BaseChatModel {
      _combineLLMOutput() {
        return [];
      }
      _llmType() {
        return "fake";
      }
      async _generate(e10, t10, r2) {
        if (t10?.stop?.length)
          return { generations: [{ message: new M.AIMessage(t10.stop[0]), text: t10.stop[0] }] };
        let i2 = e10.map((e11) => "string" == typeof e11.content ? e11.content : JSON.stringify(e11.content, null, 2)).join("\n");
        return await r2?.handleLLMNewToken(i2), { generations: [{ message: new M.AIMessage(i2), text: i2 }], llmOutput: {} };
      }
    }
    class eR extends F.BaseChatModel {
      constructor(e10) {
        super(e10), Object.defineProperty(this, "sleep", { enumerable: true, configurable: true, writable: true, value: 50 }), Object.defineProperty(this, "responses", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thrownErrorString", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.sleep = e10.sleep ?? this.sleep, this.responses = e10.responses, this.thrownErrorString = e10.thrownErrorString;
      }
      _llmType() {
        return "fake";
      }
      async _generate(e10, t10, r2) {
        if (this.thrownErrorString)
          throw Error(this.thrownErrorString);
        let i2 = this.responses?.[0].content ?? e10[0].content;
        return { generations: [{ text: "", message: new M.AIMessage({ content: i2 }) }] };
      }
      async *_streamResponseChunks(e10, t10, r2) {
        if (this.thrownErrorString)
          throw Error(this.thrownErrorString);
        let i2 = this.responses?.[0].content ?? e10[0].content;
        if ("string" != typeof i2)
          for (let t11 of this.responses ?? e10)
            yield new Z.ChatGenerationChunk({ text: "", message: new M.AIMessageChunk({ content: i2 }) });
        else
          for (let t11 of this.responses ?? e10)
            yield new Z.ChatGenerationChunk({ text: i2, message: new M.AIMessageChunk({ content: i2 }) });
      }
    }
    class eI extends er.BaseRetriever {
      constructor(e10) {
        super(), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["test", "fake"] }), Object.defineProperty(this, "output", { enumerable: true, configurable: true, writable: true, value: [new ej.B({ pageContent: "foo" }), new ej.B({ pageContent: "bar" })] }), this.output = e10?.output ?? this.output;
      }
      async _getRelevantDocuments(e10) {
        return this.output;
      }
    }
    class eM extends F.BaseChatModel {
      static lc_name() {
        return "FakeListChatModel";
      }
      constructor(e10) {
        super(e10), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "responses", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "i", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "sleep", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "emitCustomEvent", { enumerable: true, configurable: true, writable: true, value: false });
        let { responses: t10, sleep: r2, emitCustomEvent: i2 } = e10;
        this.responses = t10, this.sleep = r2, this.emitCustomEvent = i2 ?? this.emitCustomEvent;
      }
      _combineLLMOutput() {
        return [];
      }
      _llmType() {
        return "fake-list";
      }
      async _generate(e10, t10, r2) {
        if (await this._sleepIfRequested(), t10?.thrownErrorString)
          throw Error(t10.thrownErrorString);
        if (this.emitCustomEvent && await r2?.handleCustomEvent("some_test_event", { someval: true }), t10?.stop?.length)
          return { generations: [this._formatGeneration(t10.stop[0])] };
        {
          let e11 = this._currentResponse();
          return this._incrementResponse(), { generations: [this._formatGeneration(e11)], llmOutput: {} };
        }
      }
      _formatGeneration(e10) {
        return { message: new M.AIMessage(e10), text: e10 };
      }
      async *_streamResponseChunks(e10, t10, r2) {
        let i2 = this._currentResponse();
        for await (let e11 of (this._incrementResponse(), this.emitCustomEvent && await r2?.handleCustomEvent("some_test_event", { someval: true }), i2)) {
          if (await this._sleepIfRequested(), t10?.thrownErrorString)
            throw Error(t10.thrownErrorString);
          let i3 = this._createResponseChunk(e11);
          yield i3, r2?.handleLLMNewToken(e11);
        }
      }
      async _sleepIfRequested() {
        void 0 !== this.sleep && await this._sleep();
      }
      async _sleep() {
        return new Promise((e10) => {
          setTimeout(() => e10(), this.sleep);
        });
      }
      _createResponseChunk(e10) {
        return new Z.ChatGenerationChunk({ message: new M.AIMessageChunk({ content: e10 }), text: e10 });
      }
      _currentResponse() {
        return this.responses[this.i];
      }
      _incrementResponse() {
        this.i < this.responses.length - 1 ? this.i += 1 : this.i = 0;
      }
      withStructuredOutput(e10, t10) {
        return eS.Y8.from(async (e11) => JSON.parse((await this.invoke(e11)).content));
      }
    }
    class eL extends L {
      constructor() {
        super(), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "message", "fake"] }), Object.defineProperty(this, "messages", { enumerable: true, configurable: true, writable: true, value: [] });
      }
      async getMessages() {
        return this.messages;
      }
      async addMessage(e10) {
        this.messages.push(e10);
      }
      async addUserMessage(e10) {
        this.messages.push(new M.HumanMessage(e10));
      }
      async addAIChatMessage(e10) {
        this.messages.push(new M.AIMessage(e10));
      }
      async clear() {
        this.messages = [];
      }
    }
    class eD extends D {
      constructor() {
        super(), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "message", "fake"] }), Object.defineProperty(this, "messages", { enumerable: true, configurable: true, writable: true, value: [] });
      }
      async addMessage(e10) {
        this.messages.push(e10);
      }
      async getMessages() {
        return this.messages;
      }
    }
    class eW extends ea.BaseTracer {
      constructor() {
        super(), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "fake_tracer" }), Object.defineProperty(this, "runs", { enumerable: true, configurable: true, writable: true, value: [] });
      }
      persistRun(e10) {
        return this.runs.push(e10), Promise.resolve();
      }
    }
    class eV extends es.StructuredTool {
      constructor(e10) {
        super(e10), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "description", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "schema", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = e10.name, this.description = e10.description, this.schema = e10.schema;
      }
      async _call(e10, t10) {
        return JSON.stringify(e10);
      }
    }
    class eK extends K.Embeddings {
      constructor(e10) {
        super(e10 ?? {});
      }
      embedDocuments(e10) {
        return Promise.resolve(e10.map(() => [0.1, 0.2, 0.3, 0.4]));
      }
      embedQuery(e10) {
        return Promise.resolve([0.1, 0.2, 0.3, 0.4]);
      }
    }
    class eG extends K.Embeddings {
      constructor(e10) {
        super(e10 ?? {}), Object.defineProperty(this, "vectorSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.vectorSize = e10?.vectorSize ?? 4;
      }
      async embedDocuments(e10) {
        return Promise.all(e10.map((e11) => this.embedQuery(e11)));
      }
      async embedQuery(e10) {
        let t10 = e10, r2 = (t10 = t10.toLowerCase().replaceAll(/[^a-z ]/g, "")).length % this.vectorSize, i2 = 0 === r2 ? 0 : this.vectorSize - r2, n2 = t10.length + i2, s2 = (t10 = t10.padEnd(n2, " ")).length / this.vectorSize, a2 = [];
        for (let e11 = 0; e11 < t10.length; e11 += s2)
          a2.push(t10.slice(e11, e11 + s2));
        return a2.map((e11) => {
          let t11 = 0;
          for (let r3 = 0; r3 < e11.length; r3 += 1)
            t11 += " " === e11 ? 0 : e11.charCodeAt(r3);
          return t11 % 26 / 26;
        });
      }
    }
    class eB extends ea.BaseTracer {
      constructor() {
        super(), Object.defineProperty(this, "runPromiseResolver", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "runPromise", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "single_run_extractor" }), this.runPromise = new Promise((e10) => {
          this.runPromiseResolver = e10;
        });
      }
      async persistRun(e10) {
        this.runPromiseResolver(e10);
      }
      async extract() {
        return this.runPromise;
      }
    }
    class eF extends eE.VectorStore {
      _vectorstoreType() {
        return "memory";
      }
      constructor(e10, { similarity: t10, ...r2 } = {}) {
        super(e10, r2), Object.defineProperty(this, "memoryVectors", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "similarity", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.similarity = t10 ?? eC.S;
      }
      async addDocuments(e10) {
        let t10 = e10.map(({ pageContent: e11 }) => e11);
        return this.addVectors(await this.embeddings.embedDocuments(t10), e10);
      }
      async addVectors(e10, t10) {
        let r2 = e10.map((e11, r3) => ({ content: t10[r3].pageContent, embedding: e11, metadata: t10[r3].metadata }));
        this.memoryVectors = this.memoryVectors.concat(r2);
      }
      async similaritySearchVectorWithScore(e10, t10, r2) {
        let i2 = this.memoryVectors.filter((e11) => !r2 || r2(new ej.B({ metadata: e11.metadata, pageContent: e11.content })));
        return i2.map((t11, r3) => ({ similarity: this.similarity(e10, t11.embedding), index: r3 })).sort((e11, t11) => e11.similarity > t11.similarity ? -1 : 0).slice(0, t10).map((e11) => [new ej.B({ metadata: i2[e11.index].metadata, pageContent: i2[e11.index].content }), e11.similarity]);
      }
      static async fromTexts(e10, t10, r2, i2) {
        let n2 = [];
        for (let r3 = 0; r3 < e10.length; r3 += 1) {
          let i3 = Array.isArray(t10) ? t10[r3] : t10, s2 = new ej.B({ pageContent: e10[r3], metadata: i3 });
          n2.push(s2);
        }
        return eF.fromDocuments(n2, r2, i2);
      }
      static async fromDocuments(e10, t10, r2) {
        let i2 = new this(t10, r2);
        return await i2.addDocuments(e10), i2;
      }
      static async fromExistingIndex(e10, t10) {
        return new this(e10, t10);
      }
    }
    var eq = r(1930), eU = r(1742), ez = r(3345);
    function eH(e10) {
      if ("object" != typeof e10 || null === e10)
        return e10;
      let t10 = Array.isArray(e10) ? [] : {};
      for (let r2 in e10)
        Object.prototype.hasOwnProperty.call(e10, r2) && (t10[r2] = eH(e10[r2]));
      return t10;
    }
    function eJ() {
      return { v: 1, id: C(-2), ts: new Date().toISOString(), channel_values: {}, channel_versions: {}, versions_seen: {}, pending_sends: [] };
    }
    function eQ(e10) {
      return { v: e10.v, id: e10.id, ts: e10.ts, channel_values: { ...e10.channel_values }, channel_versions: { ...e10.channel_versions }, versions_seen: eH(e10.versions_seen), pending_sends: [...e10.pending_sends] };
    }
    function eY(e10, t10) {
      return "number" == typeof e10 && "number" == typeof t10 ? Math.sign(e10 - t10) : String(e10).localeCompare(String(t10));
    }
    function eZ(...e10) {
      return e10.reduce((e11, t10, r2) => 0 === r2 ? t10 : eY(e11, t10) >= 0 ? e11 : t10);
    }
    class eX extends Error {
      constructor(e10) {
        super(e10), this.name = "InvalidNamespaceError";
      }
    }
    class e0 {
      async get(e10, t10) {
        return (await this.batch([{ namespace: e10, key: t10 }]))[0];
      }
      async search(e10, t10 = {}) {
        let { filter: r2, limit: i2 = 10, offset: n2 = 0, query: s2 } = t10;
        return (await this.batch([{ namespacePrefix: e10, filter: r2, limit: i2, offset: n2, query: s2 }]))[0];
      }
      async put(e10, t10, r2, i2) {
        !function(e11) {
          if (0 === e11.length)
            throw new eX("Namespace cannot be empty.");
          for (let t11 of e11) {
            if ("string" != typeof t11)
              throw new eX(`Invalid namespace label '${t11}' found in ${e11}. Namespace labels must be strings, but got ${typeof t11}.`);
            if (t11.includes("."))
              throw new eX(`Invalid namespace label '${t11}' found in ${e11}. Namespace labels cannot contain periods ('.').`);
            if ("" === t11)
              throw new eX(`Namespace labels cannot be empty strings. Got ${t11} in ${e11}`);
          }
          if ("langgraph" === e11[0])
            throw new eX(`Root label for namespace cannot be "langgraph". Got: ${e11}`);
        }(e10), await this.batch([{ namespace: e10, key: t10, value: r2, index: i2 }]);
      }
      async delete(e10, t10) {
        await this.batch([{ namespace: e10, key: t10, value: null }]);
      }
      async listNamespaces(e10 = {}) {
        let { prefix: t10, suffix: r2, maxDepth: i2, limit: n2 = 100, offset: s2 = 0 } = e10, a2 = [];
        return t10 && a2.push({ matchType: "prefix", path: t10 }), r2 && a2.push({ matchType: "suffix", path: r2 }), (await this.batch([{ matchConditions: a2.length ? a2 : void 0, maxDepth: i2, limit: n2, offset: s2 }]))[0];
      }
      start() {
      }
      stop() {
      }
    }
    class e1 extends e0 {
      constructor(e10) {
        super(), Object.defineProperty(this, "store", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "queue", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), Object.defineProperty(this, "nextKey", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "running", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "processingTask", { enumerable: true, configurable: true, writable: true, value: null }), this.store = e10;
      }
      get isRunning() {
        return this.running;
      }
      async batch(e10) {
        throw Error("The `batch` method is not implemented on `AsyncBatchedStore`.\n Instead, it calls the `batch` method on the wrapped store.\n If you are seeing this error, something is wrong.");
      }
      async get(e10, t10) {
        return this.enqueueOperation({ namespace: e10, key: t10 });
      }
      async search(e10, t10) {
        let { filter: r2, limit: i2 = 10, offset: n2 = 0 } = t10 || {};
        return this.enqueueOperation({ namespacePrefix: e10, filter: r2, limit: i2, offset: n2 });
      }
      async put(e10, t10, r2) {
        return this.enqueueOperation({ namespace: e10, key: t10, value: r2 });
      }
      async delete(e10, t10) {
        return this.enqueueOperation({ namespace: e10, key: t10, value: null });
      }
      start() {
        this.running || (this.running = true, this.processingTask = this.processBatchQueue());
      }
      async stop() {
        this.running = false, this.processingTask && await this.processingTask;
      }
      enqueueOperation(e10) {
        return new Promise((t10, r2) => {
          let i2 = this.nextKey;
          this.nextKey += 1, this.queue.set(i2, { operation: e10, resolve: t10, reject: r2 });
        });
      }
      async processBatchQueue() {
        for (; this.running; ) {
          if (await new Promise((e11) => {
            setTimeout(e11, 0);
          }), 0 === this.queue.size)
            continue;
          let e10 = new Map(this.queue);
          this.queue.clear();
          try {
            let t10 = Array.from(e10.values()).map(({ operation: e11 }) => e11), r2 = await this.store.batch(t10);
            e10.forEach(({ resolve: t11 }, i2) => {
              let n2 = Array.from(e10.keys()).indexOf(i2);
              t11(r2[n2]);
            });
          } catch (t10) {
            e10.forEach(({ reject: e11 }) => {
              e11(t10);
            });
          }
        }
      }
    }
    class e2 extends Error {
      constructor(e10, t10) {
        let r2 = e10 ?? "";
        t10?.lc_error_code && (r2 = `${r2}

Troubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/${t10.lc_error_code}/
`), super(r2), Object.defineProperty(this, "lc_error_code", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.lc_error_code = t10?.lc_error_code;
      }
    }
    class e5 extends e2 {
      get is_bubble_up() {
        return true;
      }
    }
    class e4 extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "GraphRecursionError";
      }
      static get unminifiable_name() {
        return "GraphRecursionError";
      }
    }
    class e8 extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "GraphValueError";
      }
      static get unminifiable_name() {
        return "GraphValueError";
      }
    }
    class e6 extends e5 {
      constructor(e10, t10) {
        super(JSON.stringify(e10, null, 2), t10), Object.defineProperty(this, "interrupts", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "GraphInterrupt", this.interrupts = e10 ?? [];
      }
      static get unminifiable_name() {
        return "GraphInterrupt";
      }
    }
    class e3 extends e6 {
      constructor(e10, t10) {
        super([{ value: e10, when: "during" }], t10), this.name = "NodeInterrupt";
      }
      static get unminifiable_name() {
        return "NodeInterrupt";
      }
    }
    class e9 extends e5 {
      constructor(e10) {
        super(), Object.defineProperty(this, "command", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "ParentCommand", this.command = e10;
      }
      static get unminifiable_name() {
        return "ParentCommand";
      }
    }
    function e7(e10) {
      return void 0 !== e10 && true === e10.is_bubble_up;
    }
    function te(e10) {
      return void 0 !== e10 && [e6.unminifiable_name, e3.unminifiable_name].includes(e10.name);
    }
    class tt extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "EmptyInputError";
      }
      static get unminifiable_name() {
        return "EmptyInputError";
      }
    }
    class tr extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "EmptyChannelError";
      }
      static get unminifiable_name() {
        return "EmptyChannelError";
      }
    }
    class ti extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "InvalidUpdateError";
      }
      static get unminifiable_name() {
        return "InvalidUpdateError";
      }
    }
    class tn extends e2 {
      constructor(e10, t10) {
        super(e10, t10), this.name = "MultipleSubgraphError";
      }
      static get unminifiable_name() {
        return "MultipleSubgraphError";
      }
    }
    let ts = () => (void 0 === globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] && (globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] = /* @__PURE__ */ new Set()), globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")]);
    function ta(e10) {
      return null != e10 && true === e10.lg_is_channel;
    }
    class to {
      constructor() {
        Object.defineProperty(this, "ValueType", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "UpdateType", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "lg_is_channel", { enumerable: true, configurable: true, writable: true, value: true });
      }
      consume() {
        return false;
      }
    }
    function tl(e10, t10) {
      let r2 = Object.fromEntries(Object.entries(e10).filter(([, e11]) => ta(e11))), i2 = {};
      for (let e11 in r2)
        if (Object.prototype.hasOwnProperty.call(r2, e11)) {
          let n2 = t10.channel_values[e11];
          i2[e11] = r2[e11].fromCheckpoint(n2);
        }
      return i2;
    }
    function tc(e10, t10, r2) {
      let i2;
      if (void 0 === t10)
        i2 = e10.channel_values;
      else
        for (let e11 of (i2 = {}, Object.keys(t10)))
          try {
            i2[e11] = t10[e11].checkpoint();
          } catch (e12) {
            if (e12.name === tr.unminifiable_name)
              ;
            else
              throw e12;
          }
      return { v: 1, id: C(r2), ts: new Date().toISOString(), channel_values: i2, channel_versions: { ...e10.channel_versions }, versions_seen: eH(e10.versions_seen), pending_sends: e10.pending_sends ?? [] };
    }
    var tu = r(6378), th = r(5817);
    let td = Symbol.for("__missing__"), tp = "__input__", tf = "__error__", tb = "__pregel_send", tg = "__pregel_read", tm = "__pregel_checkpointer", ty = "__pregel_resuming", tv = "__pregel_task_id", tw = "__pregel_stream", t_ = "__pregel_resume_value", tk = "checkpoint_map", tO = "__interrupt__", tj = "__resume__", tP = "__pregel_runtime_placeholder__", tS = "langsmith:hidden", tE = "__self__", tC = "__pregel_tasks", tA = "__pregel_push", tx = "__pregel_pull", tN = "00000000-0000-0000-0000-000000000000", t$ = [tO, tj, tf, tC, tb, tg, tm, ty, tv, tw, tk, tp];
    function tT(e10) {
      return void 0 !== e10 && "Send" === e10.lg_name;
    }
    class tR {
      constructor(e10) {
        Object.defineProperty(this, "lg_name", { enumerable: true, configurable: true, writable: true, value: "Command" }), Object.defineProperty(this, "resume", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "graph", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "update", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "goto", { enumerable: true, configurable: true, writable: true, value: [] }), this.resume = e10.resume, this.graph = e10.graph, this.update = e10.update, e10.goto && (this.goto = Array.isArray(e10.goto) ? e10.goto : [e10.goto]);
      }
    }
    function tI(e10) {
      return "object" == typeof e10 && !!e10 && "Command" === e10.lg_name;
    }
    Object.defineProperty(tR, "PARENT", { enumerable: true, configurable: true, writable: true, value: "__parent__" });
    var tM = r(647);
    let tL = ["tags", "metadata", "callbacks", "configurable"], tD = ["tags", "metadata", "callbacks", "runName", "maxConcurrency", "recursionLimit", "configurable", "runId", "outputKeys", "streamMode", "store", "writer"];
    function tW(...e10) {
      let t10 = { tags: [], metadata: {}, callbacks: void 0, recursionLimit: 25, configurable: {} }, r2 = tM.AO.getRunnableConfig();
      if (void 0 !== r2) {
        for (let [e11, i2] of Object.entries(r2))
          if (void 0 !== i2) {
            if (tL.includes(e11)) {
              let r3;
              r3 = Array.isArray(i2) ? [...i2] : "object" == typeof i2 ? "callbacks" === e11 && "copy" in i2 && "function" == typeof i2.copy ? i2.copy() : { ...i2 } : i2, t10[e11] = r3;
            } else
              t10[e11] = i2;
          }
      }
      for (let r3 of e10)
        if (void 0 !== r3)
          for (let [e11, i2] of Object.entries(r3))
            void 0 !== i2 && tD.includes(e11) && (t10[e11] = i2);
      for (let [e11, r3] of Object.entries(t10.configurable))
        t10.metadata = t10.metadata ?? {}, e11.startsWith("__") || "string" != typeof r3 && "number" != typeof r3 && "boolean" != typeof r3 || e11 in t10.metadata || (t10.metadata[e11] = r3);
      return t10;
    }
    class tV extends g.eq {
      constructor(e10) {
        super(), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langgraph"] }), Object.defineProperty(this, "func", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tags", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "config", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "trace", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "recurse", { enumerable: true, configurable: true, writable: true, value: true }), this.name = e10.name ?? e10.func.name, this.func = e10.func, this.config = e10.tags ? { tags: e10.tags } : void 0, this.trace = e10.trace ?? this.trace, this.recurse = e10.recurse ?? this.recurse;
      }
      async _tracedInvoke(e10, t10, r2) {
        return new Promise((i2, n2) => {
          let s2 = (0, g.q)(t10, { callbacks: r2?.getChild() });
          tM.AO.runWithConfig(s2, async () => {
            try {
              let t11 = await this.func(e10, s2);
              i2(t11);
            } catch (e11) {
              n2(e11);
            }
          });
        });
      }
      async invoke(e10, t10) {
        let r2;
        let i2 = tW(t10), n2 = (0, g.t8)(this.config, i2);
        return (r2 = this.trace ? await this._callWithConfig(this._tracedInvoke, e10, n2) : await tM.AO.runWithConfig(n2, async () => this.func(e10, n2)), g.eq.isRunnable(r2) && this.recurse) ? await tM.AO.runWithConfig(n2, async () => r2.invoke(e10, n2)) : r2;
      }
    }
    function* tK(e10, t10) {
      if (void 0 === t10)
        yield* e10;
      else
        for (let r2 of e10)
          yield [t10, r2];
    }
    async function tG(e10) {
      let t10 = [];
      for await (let r2 of await e10)
        t10.push(r2);
      return t10;
    }
    function tB(e10) {
      let t10 = [];
      for (let r2 of e10)
        t10.push(r2);
      return t10;
    }
    function tF(e10, t10) {
      return e10 ? "configurable" in e10 ? { ...e10, configurable: { ...e10.configurable, ...t10 } } : { ...e10, configurable: t10 } : { configurable: t10 };
    }
    let tq = { [Symbol.for("LG_SKIP_WRITE")]: true }, tU = { [Symbol.for("LG_PASSTHROUGH")]: true }, tz = Symbol("IS_WRITER");
    class tH extends tV {
      constructor(e10, t10) {
        super({ writes: e10, name: `ChannelWrite<${e10.map((e11) => tT(e11) ? e11.node : e11.channel).join(",")}>`, tags: t10, func: async (e11, t11) => this._write(e11, t11 ?? {}) }), Object.defineProperty(this, "writes", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.writes = e10;
      }
      async _write(e10, t10) {
        let r2 = this.writes.map((t11) => {
          var r3;
          return void 0 !== t11 && "string" == typeof t11.channel && "object" == typeof (r3 = t11.value) && r3?.[Symbol.for("LG_PASSTHROUGH")] !== void 0 ? { channel: t11.channel, value: e10, skipNone: t11.skipNone, mapper: t11.mapper } : t11;
        });
        return await tH.doWrite(t10, r2), e10;
      }
      static async doWrite(e10, t10) {
        let r2 = t10.filter(tT).map((e11) => [tC, e11]), i2 = t10.filter((e11) => !tT(e11));
        if (i2.find((e11) => e11.channel === tC))
          throw new ti(`Cannot write to the reserved channel ${tC}`);
        let n2 = await Promise.all(i2.map(async (t11) => {
          let r3 = t11.mapper ? await t11.mapper.invoke(t11.value, e10) : t11.value;
          return { ...t11, value: r3 };
        })).then((e11) => e11.filter((e12) => !e12.skipNone || null !== e12.value).map((e12) => [e12.channel, e12.value]));
        (e10.configurable?.[tb])([...r2, ...n2.filter(([e11, t11]) => !("object" == typeof t11 && t11?.[Symbol.for("LG_SKIP_WRITE")] !== void 0))]);
      }
      static isWriter(e10) {
        return e10 instanceof tH || tz in e10 && !!e10[tz];
      }
      static registerWriter(e10) {
        return Object.defineProperty(e10, tz, { value: true });
      }
    }
    class tJ extends tV {
      constructor(e10, t10, r2 = false) {
        super({ func: (e11, t11) => tJ.doRead(t11, this.channel, this.fresh, this.mapper) }), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "ChannelRead" }), Object.defineProperty(this, "channel", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fresh", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "mapper", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.fresh = r2, this.mapper = t10, this.channel = e10, this.name = Array.isArray(e10) ? `ChannelRead<${e10.join(",")}>` : `ChannelRead<${e10}>`;
      }
      static doRead(e10, t10, r2, i2) {
        let n2 = e10.configurable?.[tg];
        if (!n2)
          throw Error(`Runnable ${this} is not configured with a read function. Make sure to call in the context of a Pregel process`);
        return i2 ? i2(n2(t10, r2)) : n2(t10, r2);
      }
    }
    let tQ = new g.sk();
    class tY extends g.pX {
      constructor(e10) {
        let { channels: t10, triggers: r2, mapper: i2, writers: n2, bound: s2, kwargs: a2, metadata: o2, retryPolicy: l2, tags: c2, subgraphs: u2 } = e10, h2 = [...e10.config?.tags ? e10.config.tags : [], ...c2 ?? []];
        super({ ...e10, bound: e10.bound ?? tQ, config: { ...e10.config ? e10.config : {}, tags: h2 } }), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "PregelNode" }), Object.defineProperty(this, "channels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "triggers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "mapper", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "writers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "bound", { enumerable: true, configurable: true, writable: true, value: tQ }), Object.defineProperty(this, "kwargs", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "metadata", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "tags", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "retryPolicy", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "subgraphs", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.channels = t10, this.triggers = r2, this.mapper = i2, this.writers = n2 ?? this.writers, this.bound = s2 ?? this.bound, this.kwargs = a2 ?? this.kwargs, this.metadata = o2 ?? this.metadata, this.tags = h2, this.retryPolicy = l2, this.subgraphs = u2;
      }
      getWriters() {
        let e10 = [...this.writers];
        for (; e10.length > 1 && e10[e10.length - 1] instanceof tH && e10[e10.length - 2] instanceof tH; ) {
          let t10 = e10.slice(-2), r2 = t10[0].writes.concat(t10[1].writes);
          e10[e10.length - 2] = new tH(r2, t10[0].config?.tags), e10.pop();
        }
        return e10;
      }
      getNode() {
        let e10 = this.getWriters();
        if (this.bound !== tQ || 0 !== e10.length)
          return this.bound === tQ && 1 === e10.length ? e10[0] : this.bound === tQ ? new g.lW({ first: e10[0], middle: e10.slice(1, e10.length - 1), last: e10[e10.length - 1], omitSequenceTags: true }) : e10.length > 0 ? new g.lW({ first: this.bound, middle: e10.slice(0, e10.length - 1), last: e10[e10.length - 1], omitSequenceTags: true }) : this.bound;
      }
      join(e10) {
        if (!Array.isArray(e10))
          throw Error("channels must be a list");
        if ("object" != typeof this.channels)
          throw Error("all channels must be named when using .join()");
        return new tY({ channels: { ...this.channels, ...Object.fromEntries(e10.map((e11) => [e11, e11])) }, triggers: this.triggers, mapper: this.mapper, writers: this.writers, bound: this.bound, kwargs: this.kwargs, config: this.config, retryPolicy: this.retryPolicy });
      }
      pipe(e10) {
        return new tY(tH.isWriter(e10) ? { channels: this.channels, triggers: this.triggers, mapper: this.mapper, writers: [...this.writers, e10], bound: this.bound, config: this.config, kwargs: this.kwargs, retryPolicy: this.retryPolicy } : this.bound === tQ ? { channels: this.channels, triggers: this.triggers, mapper: this.mapper, writers: this.writers, bound: (0, g.k9)(e10), config: this.config, kwargs: this.kwargs, retryPolicy: this.retryPolicy } : { channels: this.channels, triggers: this.triggers, mapper: this.mapper, writers: this.writers, bound: this.bound.pipe(e10), config: this.config, kwargs: this.kwargs, retryPolicy: this.retryPolicy });
      }
    }
    class tZ extends Error {
      constructor(e10) {
        super(e10), this.name = "GraphValidationError";
      }
    }
    function tX(e10, t10) {
      if (Array.isArray(e10)) {
        for (let r2 of e10)
          if (!(r2 in t10))
            throw Error(`Key ${String(r2)} not found in channels`);
      } else if (!(e10 in t10))
        throw Error(`Key ${String(e10)} not found in channels`);
    }
    function t0(e10, t10, r2 = true, i2 = false) {
      try {
        return e10[t10].get();
      } catch (e11) {
        if (e11.name === tr.unminifiable_name) {
          if (i2)
            return e11;
          if (r2)
            return null;
        }
        throw e11;
      }
    }
    function t1(e10, t10, r2 = true) {
      if (!Array.isArray(t10))
        return t0(e10, t10);
      {
        let i2 = {};
        for (let n2 of t10)
          try {
            i2[n2] = t0(e10, n2, !r2);
          } catch (e11) {
            if (e11.name === tr.unminifiable_name)
              continue;
          }
        return i2;
      }
    }
    function* t2(e10, t10, r2) {
      Array.isArray(e10) ? (true === t10 || t10.find(([t11, r3]) => e10.includes(t11))) && (yield t1(r2, e10)) : (true === t10 || t10.some(([t11, r3]) => t11 === e10)) && (yield t0(r2, e10));
    }
    function* t5(e10, t10, r2) {
      let i2;
      let n2 = t10.filter(([e11]) => void 0 === e11.config || !e11.config.tags?.includes(tS));
      if (!n2.length)
        return;
      i2 = Array.isArray(e10) ? n2.filter(([t11]) => t11.writes.some(([t12]) => e10.includes(t12))).map(([t11]) => [t11.name, Object.fromEntries(t11.writes.filter(([t12]) => e10.includes(t12)))]) : n2.flatMap(([t11]) => t11.writes.filter(([t12, r3]) => t12 === e10).map(([e11, r3]) => [t11.name, r3]));
      let s2 = Object.fromEntries(n2.map(([e11]) => [e11.name, []]));
      for (let [e11, t11] of i2)
        s2[e11].push(t11);
      for (let [e11, t11] of Object.entries(s2))
        0 === t11.length ? delete s2[e11] : 1 === t11.length && (s2[e11] = t11[0]);
      r2 && (s2.__metadata__ = { cached: r2 }), yield s2;
    }
    function t4(e10) {
      return "lg_is_pregel" in e10 && true === e10.lg_is_pregel;
    }
    function t8(e10) {
      let t10 = [e10];
      for (let e11 of t10) {
        if (t4(e11))
          return e11;
        "steps" in e11 && Array.isArray(e11.steps) && t10.push(...e11.steps);
      }
    }
    let t6 = { blue: { start: "\x1B[34m", end: "\x1B[0m" }, green: { start: "\x1B[32m", end: "\x1B[0m" }, yellow: { start: "\x1B[33;1m", end: "\x1B[0m" } }, t3 = (e10, t10) => `${e10.start}${t10}${e10.end}`;
    function t9(e10, t10, r2) {
      return e10.map((e11) => {
        let i2 = t10.find(([t11, r3]) => t11 === e11.id && r3 === tf)?.[2], n2 = t10.filter(([t11, r3]) => t11 === e11.id && r3 === tO).map(([, , e12]) => e12);
        return i2 ? { id: e11.id, name: e11.name, path: e11.path, error: i2, interrupts: n2 } : { id: e11.id, name: e11.name, path: e11.path, interrupts: n2, state: r2?.[e11.id] };
      });
    }
    function t7(e10) {
      let t10;
      let r2 = Object.values(e10), i2 = r2.length > 0 ? typeof r2[0] : void 0;
      return "number" === i2 ? t10 = 0 : "string" === i2 && (t10 = ""), t10;
    }
    function re(e10, t10) {
      if (!(Object.keys(e10).length > 0))
        return t10;
      {
        let r2 = t7(t10);
        return Object.fromEntries(Object.entries(t10).filter(([t11, i2]) => i2 > (e10[t11] ?? r2)));
      }
    }
    function rt(e10, t10) {
      return null === e10 ? { configurable: t10 } : e10?.configurable === void 0 ? { ...e10, configurable: t10 } : { ...e10, configurable: { ...e10.configurable, ...t10 } };
    }
    function rr(e10, t10) {
      let r2 = t10?.parents ?? {};
      return Object.keys(r2).length > 0 ? rt(e10, { [tk]: { ...r2, [e10.configurable?.checkpoint_ns ?? ""]: e10.configurable?.checkpoint_id } }) : e10;
    }
    let ri = (e10) => void 0 !== e10 ? e10 + 1 : 1;
    function rn(e10, t10, r2) {
      let i2;
      let n2 = Object.values(e10.channel_versions), s2 = n2.length > 0 ? typeof n2[0] : void 0;
      "number" === s2 ? i2 = 0 : "string" === s2 && (i2 = "");
      let a2 = e10.versions_seen[tO] ?? {}, o2 = Object.entries(e10.channel_versions).some(([e11, t11]) => t11 > (a2[e11] ?? i2)), l2 = r2.some((e11) => "*" === t10 ? !e11.config?.tags?.includes(tS) : t10.includes(e11.name));
      return o2 && l2;
    }
    function rs(e10, t10, r2, i2, n2, s2, a2 = false) {
      let o2, l2 = [], c2 = /* @__PURE__ */ new Set();
      if (Array.isArray(s2))
        l2 = s2.filter((e11) => i2.get(e11)), c2 = new Set((s2 = s2.filter((e11) => !i2.get(e11))).filter((e11) => n2.writes.some(([t11, r3]) => t11 === e11)));
      else {
        for (let [e11] of n2.writes)
          if (e11 === s2) {
            c2 = /* @__PURE__ */ new Set([e11]);
            break;
          }
        c2 = c2 || /* @__PURE__ */ new Set();
      }
      if (a2 && c2.size > 0) {
        let e11 = Object.fromEntries(Object.entries(r2).filter(([e12, t11]) => c2.has(e12))), i3 = tc(t10, e11, -1), a3 = tl(e11, i3);
        rl(eQ(i3), a3, [n2]), o2 = t1({ ...r2, ...a3 }, s2);
      } else
        o2 = t1(r2, s2);
      if (l2.length > 0)
        for (let t11 of l2) {
          let r3 = i2.get(t11);
          if (r3) {
            let i3 = r3.call(e10);
            o2[t11] = i3;
          }
        }
      return o2;
    }
    function ra(e10, t10, r2, i2, n2, s2) {
      for (let [t11, a2] of s2)
        if (t11 === tC) {
          if (!tT(a2))
            throw new ti(`Invalid packet type, expected SendProtocol, got ${JSON.stringify(a2)}`);
          if (!(a2.node in r2))
            throw new ti(`Invalid node name "${a2.node}" in Send packet`);
          n2.replaceRuntimeValues(e10, a2.args);
        } else
          t11 in i2 || n2.get(t11) || console.warn(`Skipping write for channel '${t11}' which has no readers`);
      t10(s2);
    }
    let ro = /* @__PURE__ */ new Set([tA, tj, tO]);
    function rl(e10, t10, r2, i2) {
      let n2;
      r2.sort((e11, t11) => {
        let r3 = e11.path?.slice(0, 3) || [], i3 = t11.path?.slice(0, 3) || [];
        for (let e12 = 0; e12 < Math.min(r3.length, i3.length); e12 += 1) {
          if (r3[e12] < i3[e12])
            return -1;
          if (r3[e12] > i3[e12])
            return 1;
        }
        return r3.length - i3.length;
      });
      let s2 = r2.some((e11) => e11.triggers.length > 0), a2 = Object.fromEntries(Object.entries(t10).filter(([e11, t11]) => ta(t11)));
      for (let t11 of r2)
        for (let r3 of (void 0 === e10.versions_seen[t11.name] && (e10.versions_seen[t11.name] = {}), t11.triggers))
          r3 in e10.channel_versions && (e10.versions_seen[t11.name][r3] = e10.channel_versions[r3]);
      for (let t11 of (Object.keys(e10.channel_versions).length > 0 && (n2 = eZ(...Object.values(e10.channel_versions))), new Set(r2.flatMap((e11) => e11.triggers).filter((e11) => !t$.includes(e11)))))
        t11 in a2 && a2[t11].consume() && void 0 !== i2 && (e10.channel_versions[t11] = i2(n2, a2[t11]));
      e10.pending_sends?.length && s2 && (e10.pending_sends = []);
      let o2 = {}, l2 = {};
      for (let t11 of r2)
        for (let [r3, i3] of t11.writes)
          ro.has(r3) || (r3 === tC ? e10.pending_sends.push({ node: i3.node, args: i3.args }) : r3 in a2 ? r3 in o2 ? o2[r3].push(i3) : o2[r3] = [i3] : r3 in l2 ? l2[r3].push(i3) : l2[r3] = [i3]);
      n2 = void 0, Object.keys(e10.channel_versions).length > 0 && (n2 = eZ(...Object.values(e10.channel_versions)));
      let c2 = /* @__PURE__ */ new Set();
      for (let [t11, r3] of Object.entries(o2))
        if (t11 in a2) {
          let s3;
          try {
            s3 = a2[t11].update(r3);
          } catch (e11) {
            if (e11.name === ti.unminifiable_name) {
              let i3 = new ti(`Invalid update for channel "${t11}" with values ${JSON.stringify(r3)}: ${e11.message}`);
              throw i3.lc_error_code = e11.lc_error_code, i3;
            }
            throw e11;
          }
          s3 && void 0 !== i2 && (e10.channel_versions[t11] = i2(n2, a2[t11])), c2.add(t11);
        }
      if (s2)
        for (let t11 of Object.keys(a2))
          !c2.has(t11) && a2[t11].update([]) && void 0 !== i2 && (e10.channel_versions[t11] = i2(n2, a2[t11]));
      return l2;
    }
    function rc(e10, t10, r2, i2, n2, s2, a2, o2) {
      let l2 = {};
      for (let c2 = 0; c2 < e10.pending_sends.length; c2 += 1) {
        let u2 = ru([tA, c2], e10, t10, r2, i2, n2, s2, a2, o2);
        void 0 !== u2 && (l2[u2.id] = u2);
      }
      for (let c2 of Object.keys(r2)) {
        let u2 = ru([tx, c2], e10, t10, r2, i2, n2, s2, a2, o2);
        void 0 !== u2 && (l2[u2.id] = u2);
      }
      return l2;
    }
    function ru(e10, t10, r2, i2, n2, s2, a2, o2, l2) {
      let { step: c2, checkpointer: u2, manager: h2 } = l2, d2 = a2.configurable ?? {}, p2 = d2.checkpoint_ns ?? "";
      if (e10[0] === tA) {
        let f2 = "number" == typeof e10[1] ? e10[1] : parseInt(e10[1], 10);
        if (f2 >= t10.pending_sends.length)
          return;
        let b2 = t10.pending_sends[f2];
        if (!("string" == typeof b2.node && void 0 !== b2.args)) {
          console.warn(`Ignoring invalid packet ${JSON.stringify(b2)} in pending sends.`);
          return;
        }
        if (!(b2.node in i2)) {
          console.warn(`Ignoring unknown node name ${b2.node} in pending sends.`);
          return;
        }
        let m2 = [tA], y2 = "" === p2 ? b2.node : `${p2}|${b2.node}`, v2 = A(JSON.stringify([y2, c2.toString(), b2.node, tA, f2.toString()]), t10.id), w2 = `${y2}:${v2}`, _2 = { langgraph_step: c2, langgraph_node: b2.node, langgraph_triggers: m2, langgraph_path: e10, langgraph_checkpoint_ns: w2 };
        if (!o2)
          return { id: v2, name: b2.node, interrupts: [], path: e10 };
        {
          let o3 = i2[b2.node], f3 = o3.getNode();
          if (void 0 !== f3) {
            s2.replaceRuntimePlaceholders(c2, b2.args), void 0 !== o3.metadata && (_2 = { ..._2, ...o3.metadata });
            let y3 = [], k2 = r2?.find((e11) => [v2, tN].includes(e11[0]) && e11[1] === tj);
            return { name: b2.node, input: b2.args, proc: f3, subgraphs: o3.subgraphs, writes: y3, config: (0, g.q)((0, g.t8)(a2, { metadata: _2, tags: o3.tags, store: l2.store ?? a2.store }), { runName: b2.node, callbacks: h2?.getChild(`graph:step:${c2}`), configurable: { [tv]: v2, [tb]: (e11) => ra(c2, (e12) => y3.push(...e12), i2, n2, s2, e11), [tg]: (r3, i3 = false) => rs(c2, t10, n2, s2, { name: b2.node, writes: y3, triggers: m2, path: e10 }, r3, i3), [tm]: u2 ?? d2[tm], [tk]: { ...d2[tk], [p2]: t10.id }, [t_]: k2 ? k2[2] : d2[t_] ?? td, checkpoint_id: void 0, checkpoint_ns: w2 } }), triggers: m2, retry_policy: o3.retryPolicy, id: v2, path: e10, writers: o3.getWriters() };
          }
        }
      } else if (e10[0] === tx) {
        let f2 = e10[1].toString(), b2 = i2[f2];
        if (void 0 === b2)
          return;
        let m2 = t7(t10.channel_versions);
        if (void 0 === m2)
          return;
        let y2 = t10.versions_seen[f2] ?? {}, v2 = b2.triggers.filter((e11) => {
          let r3 = t0(n2, e11, false, true);
          return !(r3 instanceof Error && r3.name === tr.unminifiable_name) && (t10.channel_versions[e11] ?? m2) > (y2[e11] ?? m2);
        }).sort();
        if (v2.length > 0) {
          let m3 = function(e11, t11, r3, i3, n3) {
            let s3;
            if ("object" != typeof t11.channels || Array.isArray(t11.channels)) {
              if (Array.isArray(t11.channels)) {
                let e12 = false;
                for (let r4 of t11.channels)
                  try {
                    s3 = t0(i3, r4, false), e12 = true;
                    break;
                  } catch (e13) {
                    if (e13.name === tr.unminifiable_name)
                      continue;
                    throw e13;
                  }
                if (!e12)
                  return;
              } else
                throw Error(`Invalid channels type, expected list or dict, got ${t11.channels}`);
            } else
              for (let [n4, a3] of (s3 = {}, Object.entries(t11.channels)))
                if (t11.triggers.includes(a3))
                  try {
                    s3[n4] = t0(i3, a3, false);
                  } catch (e12) {
                    if (e12.name === tr.unminifiable_name)
                      return;
                    throw e12;
                  }
                else if (a3 in i3)
                  try {
                    s3[n4] = t0(i3, a3, true);
                  } catch (e12) {
                    if (e12.name === tr.unminifiable_name)
                      continue;
                    throw e12;
                  }
                else
                  s3[n4] = r3.get(n4)?.call(e11);
            return n3 && void 0 !== t11.mapper && (s3 = t11.mapper(s3)), s3;
          }(c2, b2, s2, n2, o2);
          if (void 0 === m3)
            return;
          let y3 = "" === p2 ? f2 : `${p2}|${f2}`, w2 = A(JSON.stringify([y3, c2.toString(), f2, tx, v2]), t10.id), _2 = { langgraph_step: c2, langgraph_node: f2, langgraph_triggers: v2, langgraph_path: e10, langgraph_checkpoint_ns: `${y3}:${w2}` };
          if (!o2)
            return { id: w2, name: f2, interrupts: [], path: e10 };
          {
            let o3 = b2.getNode();
            if (void 0 !== o3) {
              void 0 !== b2.metadata && (_2 = { ..._2, ...b2.metadata });
              let k2 = [], O2 = r2?.find((e11) => [w2, tN].includes(e11[0]) && e11[1] === tj), j2 = `${y3}:${w2}`;
              return { name: f2, input: m3, proc: o3, subgraphs: b2.subgraphs, writes: k2, config: (0, g.q)((0, g.t8)(a2, { metadata: _2, tags: b2.tags, store: l2.store ?? a2.store }), { runName: f2, callbacks: h2?.getChild(`graph:step:${c2}`), configurable: { [tv]: w2, [tb]: (e11) => ra(c2, (e12) => {
                k2.push(...e12);
              }, i2, n2, s2, e11), [tg]: (r3, i3 = false) => rs(c2, t10, n2, s2, { name: f2, writes: k2, triggers: v2, path: e10 }, r3, i3), [tm]: u2 ?? d2[tm], [tk]: { ...d2[tk], [p2]: t10.id }, [t_]: O2 ? O2[2] : d2[t_] ?? td, checkpoint_id: void 0, checkpoint_ns: j2 } }), triggers: v2, retry_policy: b2.retryPolicy, id: w2, path: e10, writers: b2.getWriters() };
            }
          }
        }
      }
    }
    let rh = Symbol.for("INPUT_DONE"), rd = Symbol.for("INPUT_RESUMING");
    class rp extends eO.IterableReadableStream {
      constructor(e10) {
        let t10;
        let r2 = new Promise((e11) => {
          t10 = e11;
        });
        super({ start: (e11) => {
          t10(e11);
        } }), Object.defineProperty(this, "modes", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "controller", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "passthroughFn", { enumerable: true, configurable: true, writable: true, value: void 0 }), r2.then((e11) => {
          this.controller = e11;
        }), this.passthroughFn = e10.passthroughFn, this.modes = e10.modes;
      }
      push(e10) {
        this.passthroughFn?.(e10), this.controller.enqueue(e10);
      }
      close() {
        try {
          this.controller.close();
        } catch (e10) {
        }
      }
      error(e10) {
        this.controller.error(e10);
      }
    }
    class rf {
      constructor(e10) {
        Object.defineProperty(this, "input", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "output", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "config", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointerGetNextVersion", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "channels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "managed", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointConfig", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointMetadata", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointNamespace", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointPendingWrites", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "checkpointPreviousVersions", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "step", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "stop", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "outputKeys", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "streamKeys", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nodes", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "skipDoneTasks", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "prevCheckpointConfig", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "status", { enumerable: true, configurable: true, writable: true, value: "pending" }), Object.defineProperty(this, "tasks", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "stream", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "checkpointerPromises", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "isNested", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_checkpointerChainedPromise", { enumerable: true, configurable: true, writable: true, value: Promise.resolve() }), Object.defineProperty(this, "store", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.input = e10.input, this.checkpointer = e10.checkpointer, void 0 !== this.checkpointer ? this.checkpointerGetNextVersion = this.checkpointer.getNextVersion.bind(this.checkpointer) : this.checkpointerGetNextVersion = ri, this.checkpoint = e10.checkpoint, this.checkpointMetadata = e10.checkpointMetadata, this.checkpointPreviousVersions = e10.checkpointPreviousVersions, this.channels = e10.channels, this.managed = e10.managed, this.checkpointPendingWrites = e10.checkpointPendingWrites, this.step = e10.step, this.stop = e10.stop, this.config = e10.config, this.checkpointConfig = e10.checkpointConfig, this.isNested = e10.isNested, this.outputKeys = e10.outputKeys, this.streamKeys = e10.streamKeys, this.nodes = e10.nodes, this.skipDoneTasks = e10.skipDoneTasks, this.store = e10.store, this.stream = e10.stream, this.checkpointNamespace = e10.checkpointNamespace, this.prevCheckpointConfig = e10.prevCheckpointConfig;
      }
      static async initialize(e10) {
        let { config: t10, stream: r2 } = e10, { checkSubgraphs: i2 = true } = e10;
        void 0 !== r2 && t10.configurable?.[tw] !== void 0 && (r2 = function(...e11) {
          return new rp({ passthroughFn: (t11) => {
            for (let r3 of e11)
              r3.modes.has(t11[1]) && r3.push(t11);
          }, modes: new Set(e11.flatMap((e12) => Array.from(e12.modes))) });
        }(r2, t10.configurable[tw]));
        let n2 = !t10.configurable || !("checkpoint_id" in t10.configurable), s2 = tg in (t10.configurable ?? {});
        s2 || t10.configurable?.checkpoint_ns === void 0 || t10.configurable?.checkpoint_ns === "" || (t10 = rt(t10, { checkpoint_ns: "", checkpoint_id: void 0 }));
        let a2 = t10;
        t10.configurable?.[tk] !== void 0 && t10.configurable?.[tk]?.[t10.configurable?.checkpoint_ns] && (a2 = rt(t10, { checkpoint_id: t10.configurable[tk][t10.configurable?.checkpoint_ns] }));
        let o2 = t10.configurable?.checkpoint_ns?.split("|") ?? [], l2 = await e10.checkpointer?.getTuple(a2) ?? { config: t10, checkpoint: eJ(), metadata: { source: "input", step: -2, writes: null, parents: {} }, pendingWrites: [] };
        a2 = { ...t10, ...l2.config, configurable: { checkpoint_ns: "", ...t10.configurable, ...l2.config.configurable } };
        let c2 = l2.parentConfig, u2 = eQ(l2.checkpoint), h2 = { ...l2.metadata }, d2 = l2.pendingWrites ?? [], p2 = tl(e10.channelSpecs, u2), f2 = (h2.step ?? 0) + 1, b2 = f2 + (t10.recursionLimit ?? 25) + 1, g2 = { ...u2.channel_versions }, m2 = e10.store ? new e1(e10.store) : void 0;
        if (m2 && m2.start(), i2 && s2 && void 0 !== e10.checkpointer) {
          if (ts().has(t10.configurable?.checkpoint_ns))
            throw new tn('Detected the same subgraph called multiple times by the same node.\nThis is not allowed if checkpointing is enabled.\n\nYou can disable checkpointing for a subgraph by compiling it with ".compile({ checkpointer: false });"', { lc_error_code: "MULTIPLE_SUBGRAPHS" });
          ts().add(t10.configurable?.checkpoint_ns);
        }
        return new rf({ input: e10.input, config: t10, checkpointer: e10.checkpointer, checkpoint: u2, checkpointMetadata: h2, checkpointConfig: a2, prevCheckpointConfig: c2, checkpointNamespace: o2, channels: p2, managed: e10.managed, isNested: s2, skipDoneTasks: n2, step: f2, stop: b2, checkpointPreviousVersions: g2, checkpointPendingWrites: d2, outputKeys: e10.outputKeys ?? [], streamKeys: e10.streamKeys ?? [], nodes: e10.nodes, stream: r2, store: m2 });
      }
      _checkpointerPutAfterPrevious(e10) {
        this._checkpointerChainedPromise = this._checkpointerChainedPromise.then(() => this.checkpointer?.put(e10.config, e10.checkpoint, e10.metadata, e10.newVersions)), this.checkpointerPromises.push(this._checkpointerChainedPromise);
      }
      async updateManagedValues(e10, t10) {
        let r2 = this.managed.get(e10);
        r2 && "update" in r2 && "function" == typeof r2.update && await r2.update(t10);
      }
      putWrites(e10, t10) {
        if (0 === t10.length)
          return;
        let r2 = t10.map(([t11, r3]) => [e10, t11, r3]);
        this.checkpointPendingWrites.push(...r2);
        let i2 = this.checkpointer?.putWrites({ ...this.checkpointConfig, configurable: { ...this.checkpointConfig.configurable, checkpoint_ns: this.config.configurable?.checkpoint_ns ?? "", checkpoint_id: this.checkpoint.id } }, t10, e10);
        void 0 !== i2 && this.checkpointerPromises.push(i2), this.tasks && this._outputWrites(e10, t10);
      }
      _outputWrites(e10, t10, r2 = false) {
        let i2 = this.tasks[e10];
        if (void 0 !== i2) {
          if (void 0 !== i2.config && (i2.config.tags ?? []).includes(tS))
            return;
          t10.length > 0 && t10[0][0] !== tf && t10[0][0] !== tO && this._emit(tB(tK(t5(this.outputKeys, [[i2, t10]], r2), "updates"))), r2 || this._emit(tB(tK(function* (e11, t11, r3) {
            let i3 = new Date().toISOString();
            for (let [{ id: n2, name: s2, config: a2 }, o2] of t11)
              a2?.tags?.includes(tS) || (yield { type: "task_result", timestamp: i3, step: e11, payload: { id: n2, name: s2, result: o2.filter(([e12]) => Array.isArray(r3) ? r3.includes(e12) : e12 === r3), interrupts: o2.filter((e12) => e12[0] === tO).map((e12) => e12[1]) } });
          }(this.step, [[i2, t10]], this.streamKeys), "debug")));
        }
      }
      async tick(e10) {
        let t10;
        try {
          this.store && !this.store.isRunning && this.store?.start();
          let { inputKeys: t11 = [], interruptAfter: r2 = [], interruptBefore: i2 = [], manager: n2 } = e10;
          if ("pending" !== this.status)
            throw Error(`Cannot tick when status is no longer "pending". Current status: "${this.status}"`);
          if ([rh, rd].includes(this.input)) {
            if (!Object.values(this.tasks).every((e11) => e11.writes.length > 0))
              return false;
            {
              let e11 = Object.values(this.tasks).flatMap((e12) => e12.writes), t12 = rl(this.checkpoint, this.channels, Object.values(this.tasks), this.checkpointerGetNextVersion);
              for (let [e12, r3] of Object.entries(t12))
                await this.updateManagedValues(e12, r3);
              let i3 = await tG(tK(t2(this.outputKeys, e11, this.channels), "values"));
              if (this._emit(i3), this.checkpointPendingWrites = [], await this._putCheckpoint({ source: "loop", writes: t5(this.outputKeys, Object.values(this.tasks).map((e12) => [e12, e12.writes])).next().value ?? null }), rn(this.checkpoint, r2, Object.values(this.tasks))) {
                if (this.status = "interrupt_after", !this.isNested)
                  return false;
                throw new e6();
              }
            }
          } else
            await this._first(t11);
          if (this.step > this.stop)
            return this.status = "out_of_steps", false;
          let s2 = rc(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.managed, this.config, true, { step: this.step, checkpointer: this.checkpointer, isResuming: this.input === rd, manager: n2, store: this.store });
          if (this.tasks = s2, this.checkpointer && this._emit(await tG(tK(function* (e11, t12, r3, i3, n3, s3, a3, o2) {
            function l2(e12) {
              let t13 = {};
              return null != e12.callbacks && (t13.callbacks = e12.callbacks), null != e12.configurable && (t13.configurable = e12.configurable), null != e12.maxConcurrency && (t13.max_concurrency = e12.maxConcurrency), null != e12.metadata && (t13.metadata = e12.metadata), null != e12.recursionLimit && (t13.recursion_limit = e12.recursionLimit), null != e12.runId && (t13.run_id = e12.runId), null != e12.runName && (t13.run_name = e12.runName), null != e12.tags && (t13.tags = e12.tags), t13;
            }
            let c2 = t12.configurable?.checkpoint_ns, u2 = {};
            for (let e12 of s3) {
              if (!(e12.subgraphs?.length ? e12.subgraphs : [e12.proc]).find(t8))
                continue;
              let r4 = `${e12.name}:${e12.id}`;
              c2 && (r4 = `${c2}|${r4}`), u2[e12.id] = { configurable: { thread_id: t12.configurable?.thread_id, checkpoint_ns: r4 } };
            }
            let h2 = new Date().toISOString();
            yield { type: "checkpoint", timestamp: h2, step: e11, payload: { config: l2(t12), values: t1(r3, i3), metadata: n3, next: s3.map((e12) => e12.name), tasks: t9(s3, a3, u2), parentConfig: o2 ? l2(o2) : void 0 } };
          }(this.step - 1, this.checkpointConfig, this.channels, this.streamKeys, this.checkpointMetadata, Object.values(this.tasks), this.checkpointPendingWrites, this.prevCheckpointConfig), "debug"))), 0 === Object.values(this.tasks).length)
            return this.status = "done", false;
          if (this.skipDoneTasks && this.checkpointPendingWrites.length > 0) {
            for (let [e11, t12, r3] of this.checkpointPendingWrites) {
              if (t12 === tf || t12 === tO || t12 === tj)
                continue;
              let i3 = Object.values(this.tasks).find((t13) => t13.id === e11);
              i3 && i3.writes.push([t12, r3]);
            }
            for (let e11 of Object.values(this.tasks))
              e11.writes.length > 0 && this._outputWrites(e11.id, e11.writes, true);
          }
          if (Object.values(this.tasks).every((e11) => e11.writes.length > 0))
            return this.tick({ inputKeys: t11, interruptAfter: r2, interruptBefore: i2, manager: n2 });
          if (rn(this.checkpoint, i2, Object.values(this.tasks))) {
            if (this.status = "interrupt_before", !this.isNested)
              return false;
            throw new e6();
          }
          let a2 = await tG(tK(function* (e11, t12) {
            let r3 = new Date().toISOString();
            for (let { id: i3, name: n3, input: s3, config: a3, triggers: o2, writes: l2 } of t12) {
              if (a3?.tags?.includes(tS))
                continue;
              let t13 = l2.filter(([e12, t14]) => e12 === i3 && t14 === tO).map(([, e12]) => e12);
              yield { type: "task", timestamp: r3, step: e11, payload: { id: i3, name: n3, input: s3, triggers: o2, interrupts: t13 } };
            }
          }(this.step, Object.values(this.tasks)), "debug"));
          return this._emit(a2), true;
        } catch (e11) {
          if (t10 = e11, this._suppressInterrupt(t10))
            this.output = t1(this.channels, this.outputKeys);
          else
            throw t10;
          return false;
        } finally {
          void 0 === t10 && (this.output = t1(this.channels, this.outputKeys));
        }
      }
      _suppressInterrupt(e10) {
        return te(e10) && !this.isNested;
      }
      async _first(e10) {
        let t10 = 0 !== Object.keys(this.checkpoint.channel_versions).length && (this.config.configurable?.[ty] !== void 0 || null === this.input || tI(this.input));
        if (tI(this.input)) {
          let e11 = {};
          for (let [t11, r2, i2] of function* (e12) {
            if (e12.graph === tR.PARENT)
              throw new ti("There is no parent graph.");
            if (e12.goto)
              for (let t12 of Array.isArray(e12.goto) ? e12.goto : [e12.goto])
                if (tT(t12))
                  yield [tN, tC, t12];
                else if ("string" == typeof t12)
                  yield [tN, `branch:__start__:${tE}:${t12}`, "__start__"];
                else
                  throw Error(`In Command.send, expected Send or string, got ${typeof t12}`);
            if (e12.resume) {
              if ("object" == typeof e12.resume && e12.resume && Object.keys(e12.resume).length && Object.keys(e12.resume).every(k.Z))
                for (let [t12, r3] of Object.entries(e12.resume))
                  yield [t12, tj, r3];
              else
                yield [tN, tj, e12.resume];
            }
            if (e12.update) {
              if ("object" != typeof e12.update || !e12.update)
                throw Error("Expected cmd.update to be a dict mapping channel names to update values");
              for (let [t12, r3] of Object.entries(e12.update))
                yield [tN, t12, r3];
            }
          }(this.input))
            void 0 === e11[t11] && (e11[t11] = []), e11[t11].push([r2, i2]);
          if (0 === Object.keys(e11).length)
            throw new tt("Received empty Command input");
          for (let [t11, r2] of Object.entries(e11))
            this.putWrites(t11, r2);
        }
        if (t10) {
          for (let e12 of Object.keys(this.channels))
            if (void 0 !== this.checkpoint.channel_versions[e12]) {
              let t11 = this.checkpoint.channel_versions[e12];
              this.checkpoint.versions_seen[tO] = { ...this.checkpoint.versions_seen[tO], [e12]: t11 };
            }
          let e11 = await tG(tK(t2(this.outputKeys, true, this.channels), "values"));
          this._emit(e11);
        } else {
          let t11 = await tG(function* (e11, t12) {
            if (null != t12) {
              if (Array.isArray(e11) && "object" == typeof t12 && !Array.isArray(t12))
                for (let r3 in t12)
                  e11.includes(r3) && (yield [r3, t12[r3]]);
              else if (Array.isArray(e11))
                throw Error('Input chunk must be an object when "inputChannels" is an array');
              else
                yield [e11, t12];
            }
          }(e10, this.input));
          if (0 === t11.length)
            throw new tt(`Received no input writes for ${JSON.stringify(e10, null, 2)}`);
          let r2 = rc(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.managed, this.config, true, { step: this.step });
          rl(this.checkpoint, this.channels, Object.values(r2).concat([{ name: tp, writes: t11, triggers: [] }]), this.checkpointerGetNextVersion), await this._putCheckpoint({ source: "input", writes: Object.fromEntries(t11) });
        }
        this.input = t10 ? rd : rh, this.isNested || (this.config = rt(this.config, { [ty]: t10 }));
      }
      _emit(e10) {
        for (let t10 of e10)
          this.stream.modes.has(t10[0]) && this.stream.push([this.checkpointNamespace, ...t10]);
      }
      async _putCheckpoint(e10) {
        let t10 = { ...e10, step: this.step, parents: this.config.configurable?.[tk] ?? {} };
        if (void 0 !== this.checkpointer) {
          this.prevCheckpointConfig = this.checkpointConfig?.configurable?.checkpoint_id ? this.checkpointConfig : void 0, this.checkpointMetadata = t10, this.checkpoint = tc(this.checkpoint, this.channels, this.step), this.checkpointConfig = { ...this.checkpointConfig, configurable: { ...this.checkpointConfig.configurable, checkpoint_ns: this.config.configurable?.checkpoint_ns ?? "" } };
          let e11 = { ...this.checkpoint.channel_versions }, r2 = re(this.checkpointPreviousVersions, e11);
          this.checkpointPreviousVersions = e11, this._checkpointerPutAfterPrevious({ config: { ...this.checkpointConfig }, checkpoint: eQ(this.checkpoint), metadata: { ...this.checkpointMetadata }, newVersions: r2 }), this.checkpointConfig = { ...this.checkpointConfig, configurable: { ...this.checkpointConfig.configurable, checkpoint_id: this.checkpoint.id } };
        }
        this.step += 1;
      }
    }
    let rb = [400, 401, 402, 403, 404, 405, 406, 407, 409], rg = (e10) => {
      if (e10.message.startsWith("Cancel") || e10.message.startsWith("AbortError") || "AbortError" === e10.name || e10?.code === "ECONNABORTED")
        return false;
      let t10 = e10?.response?.status ?? e10?.status;
      return !(t10 && rb.includes(+t10)) && e10?.error?.code !== "insufficient_quota";
    };
    async function* rm(e10, t10) {
      let r2;
      let { stepTimeout: i2, retryPolicy: n2 } = t10 ?? {}, s2 = t10?.signal, a2 = Object.fromEntries(e10.map((e11) => [e11.id, ry(e11, n2)]));
      i2 && s2 ? "any" in AbortSignal && (s2 = AbortSignal.any([s2, AbortSignal.timeout(i2)])) : i2 && (s2 = AbortSignal.timeout(i2)), s2?.throwIfAborted();
      let o2 = new Promise((e11, t11) => {
        r2 = () => t11(Error("Abort")), s2?.addEventListener("abort", r2);
      }).finally(() => s2?.removeEventListener("abort", r2));
      for (; Object.keys(a2).length > 0; ) {
        let e11 = await Promise.race([...Object.values(a2), o2]);
        yield e11, delete a2[e11.task.id];
      }
    }
    async function ry(e10, t10) {
      let r2, i2;
      let n2 = e10.retry_policy ?? t10, s2 = void 0 !== n2 ? n2.initialInterval ?? 500 : 0, a2 = 0;
      for (; ; ) {
        for (; e10.writes.length > 0; )
          e10.writes.pop();
        r2 = void 0;
        try {
          i2 = await e10.proc.invoke(e10.input, e10.config);
          break;
        } catch (l2) {
          var o2;
          if ((r2 = l2).pregelTaskId = e10.id, void 0 !== (o2 = r2) && o2.name === e9.unminifiable_name) {
            let t12 = e10.config?.configurable?.checkpoint_ns, i4 = r2.command;
            if (i4.graph === t12) {
              for (let t13 of e10.writers)
                await t13.invoke(i4, e10.config);
              break;
            }
            if (i4.graph === tR.PARENT) {
              let e11 = t12.split("|").slice(0, -1).join("|");
              r2.command = new tR({ ...r2.command, graph: e11 });
            }
          }
          if (e7(r2) || void 0 === n2 || (a2 += 1) >= (n2.maxAttempts ?? 3) || !(n2.retryOn ?? rg)(r2))
            break;
          s2 = Math.min(n2.maxInterval ?? 128e3, s2 * (n2.backoffFactor ?? 2));
          let t11 = n2.jitter ? Math.floor(s2 + 1e3 * Math.random()) : s2;
          await new Promise((e11) => setTimeout(e11, t11));
          let i3 = r2.name ?? r2.constructor.unminifiable_name ?? r2.constructor.name;
          console.log(`Retrying task "${e10.name}" after ${s2.toFixed(2)}ms (attempt ${a2}) after ${i3}: ${r2}`);
        } finally {
          let t11 = e10.config?.configurable?.checkpoint_ns;
          t11 && ts().delete(t11);
        }
      }
      return { task: e10, result: i2, error: r2 };
    }
    class rv {
      constructor(e10, t10) {
        Object.defineProperty(this, "runtime", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "config", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_promises", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "lg_is_managed_value", { enumerable: true, configurable: true, writable: true, value: true }), this.config = e10;
      }
      static async initialize(e10, t10) {
        throw Error("Not implemented");
      }
      async promises() {
        return Promise.all(this._promises);
      }
      addPromise(e10) {
        this._promises.push(e10);
      }
    }
    class rw extends Map {
      constructor(e10) {
        super(e10 ? Array.from(e10) : void 0);
      }
      replaceRuntimeValues(e10, t10) {
        if (!(0 === this.size || !t10 || Array.from(this.values()).every((e11) => !e11.runtime))) {
          if ("object" != typeof t10 || Array.isArray(t10)) {
            if ("object" == typeof t10 && "constructor" in t10)
              for (let r2 of Object.getOwnPropertyNames(Object.getPrototypeOf(t10)))
                try {
                  let i2 = t10[r2];
                  for (let [n2, s2] of this.entries())
                    s2.runtime && s2.call(e10) === i2 && (t10[r2] = { [tP]: n2 });
                } catch (e11) {
                  if (e11.name !== TypeError.name)
                    throw e11;
                }
          } else
            for (let [r2, i2] of Object.entries(t10))
              for (let [n2, s2] of this.entries())
                s2.runtime && s2.call(e10) === i2 && (t10[r2] = { [tP]: n2 });
        }
      }
      replaceRuntimePlaceholders(e10, t10) {
        if (!(0 === this.size || !t10 || Array.from(this.values()).every((e11) => !e11.runtime))) {
          if ("object" != typeof t10 || Array.isArray(t10)) {
            if ("object" == typeof t10 && "constructor" in t10)
              for (let r2 of Object.getOwnPropertyNames(Object.getPrototypeOf(t10)))
                try {
                  let i2 = t10[r2];
                  if ("object" == typeof i2 && null !== i2 && tP in i2) {
                    let n2 = this.get(i2[tP]);
                    n2 && (t10[r2] = n2.call(e10));
                  }
                } catch (e11) {
                  if (e11.name !== TypeError.name)
                    throw e11;
                }
          } else
            for (let [r2, i2] of Object.entries(t10))
              if ("object" == typeof i2 && null !== i2 && tP in i2) {
                let n2 = i2[tP];
                "string" == typeof n2 && (t10[r2] = this.get(n2)?.call(e10));
              }
        }
      }
    }
    function r_(e10) {
      return "object" == typeof e10 && !!e10 && "cls" in e10 && "params" in e10;
    }
    class rk extends rv {
      call() {
      }
      static async initialize(e10, t10) {
        return Promise.resolve(new rk(e10));
      }
    }
    var rO = r(2208), rj = r(9279);
    class rP extends T.BaseCallbackHandler {
      constructor(e10) {
        super(), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "StreamMessagesHandler" }), Object.defineProperty(this, "streamFn", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "metadatas", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "seen", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "emittedChatModelRunIds", { enumerable: true, configurable: true, writable: true, value: {} }), this.streamFn = e10;
      }
      _emit(e10, t10, r2 = false) {
        if (!r2 || void 0 === t10.id || void 0 === this.seen[t10.id]) {
          if (void 0 === t10.id) {
            let e11 = (0, rO.Z)();
            t10.id = e11, t10.lc_kwargs.id = e11;
          }
          this.seen[t10.id] = t10, this.streamFn([e10[0], "messages", [t10, e10[1]]]);
        }
      }
      handleChatModelStart(e10, t10, r2, i2, n2, s2, a2, o2) {
        !a2 || s2 && s2.includes("langsmith:nostream") && s2.includes("nostream") || (this.metadatas[r2] = [a2.langgraph_checkpoint_ns.split("|"), { tags: s2, name: o2, ...a2 }]);
      }
      handleLLMNewToken(e10, t10, r2, i2, n2, s2) {
        let a2 = s2?.chunk;
        (this.emittedChatModelRunIds[r2] = true, (0, rj.QW)(a2?.message) && void 0 !== this.metadatas[r2]) ? this._emit(this.metadatas[r2], a2.message) : this._emit(this.metadatas[r2], new rj.GC({ content: e10 }));
      }
      handleLLMEnd(e10, t10) {
        if (!this.emittedChatModelRunIds[t10]) {
          let r2 = e10.generations?.[0]?.[0];
          (0, rj.QW)(r2?.message) && this._emit(this.metadatas[t10], r2?.message, true), delete this.emittedChatModelRunIds[t10];
        }
        delete this.metadatas[t10];
      }
      handleLLMError(e10, t10) {
        delete this.metadatas[t10];
      }
      handleChainStart(e10, t10, r2, i2, n2, s2, a2, o2) {
        void 0 === s2 || o2 !== s2.langgraph_node || void 0 !== n2 && n2.includes(tS) || (this.metadatas[r2] = [s2.langgraph_checkpoint_ns.split("|"), { tags: n2, name: o2, ...s2 }]);
      }
      handleChainEnd(e10, t10) {
        let r2 = this.metadatas[t10];
        if (delete this.metadatas[t10], void 0 !== r2) {
          if ((0, rj.QW)(e10))
            this._emit(r2, e10, true);
          else if (Array.isArray(e10))
            for (let t11 of e10)
              (0, rj.QW)(t11) && this._emit(r2, t11, true);
          else if (null != e10 && "object" == typeof e10) {
            for (let t11 of Object.values(e10))
              if ((0, rj.QW)(t11))
                this._emit(r2, t11, true);
              else if (Array.isArray(t11))
                for (let e11 of t11)
                  (0, rj.QW)(e11) && this._emit(r2, e11, true);
          }
        }
      }
      handleChainError(e10, t10) {
        delete this.metadatas[t10];
      }
    }
    class rS {
      static subscribeTo(e10, t10) {
        let r2;
        let { key: i2, tags: n2 } = t10 ?? {};
        if (Array.isArray(e10) && void 0 !== i2)
          throw Error("Can't specify a key when subscribing to multiple channels");
        return new tY({ channels: "string" == typeof e10 ? i2 ? { [i2]: e10 } : [e10] : Object.fromEntries(e10.map((e11) => [e11, e11])), triggers: Array.isArray(e10) ? e10 : [e10], tags: n2 });
      }
      static writeTo(e10, t10) {
        let r2 = [];
        for (let t11 of e10)
          r2.push({ channel: t11, value: tU, skipNone: false });
        for (let [e11, i2] of Object.entries(t10 ?? {}))
          g.eq.isRunnable(i2) || "function" == typeof i2 ? r2.push({ channel: e11, value: tU, skipNone: true, mapper: (0, g.k9)(i2) }) : r2.push({ channel: e11, value: i2, skipNone: false });
        return new tH(r2);
      }
    }
    class rE extends g.eq {
      static lc_name() {
        return "LangGraph";
      }
      constructor(e10) {
        super(e10), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langgraph", "pregel"] }), Object.defineProperty(this, "lg_is_pregel", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "nodes", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "channels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "inputChannels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "outputChannels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "autoValidate", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "streamMode", { enumerable: true, configurable: true, writable: true, value: ["values"] }), Object.defineProperty(this, "streamChannels", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interruptAfter", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interruptBefore", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "stepTimeout", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "debug", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "checkpointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "retryPolicy", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "config", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "store", { enumerable: true, configurable: true, writable: true, value: void 0 });
        let { streamMode: t10 } = e10;
        null == t10 || Array.isArray(t10) || (t10 = [t10]), this.nodes = e10.nodes, this.channels = e10.channels, this.autoValidate = e10.autoValidate ?? this.autoValidate, this.streamMode = t10 ?? this.streamMode, this.inputChannels = e10.inputChannels, this.outputChannels = e10.outputChannels, this.streamChannels = e10.streamChannels ?? this.streamChannels, this.interruptAfter = e10.interruptAfter, this.interruptBefore = e10.interruptBefore, this.stepTimeout = e10.stepTimeout ?? this.stepTimeout, this.debug = e10.debug ?? this.debug, this.checkpointer = e10.checkpointer, this.retryPolicy = e10.retryPolicy, this.config = e10.config, this.store = e10.store, this.autoValidate && this.validate();
      }
      withConfig(e10) {
        let t10 = (0, g.t8)(this.config, e10);
        return new this.constructor({ ...this, config: t10 });
      }
      validate() {
        return !function({ nodes: e10, channels: t10, inputChannels: r2, outputChannels: i2, streamChannels: n2, interruptAfterNodes: s2, interruptBeforeNodes: a2 }) {
          if (!t10)
            throw new tZ("Channels not provided");
          let o2 = /* @__PURE__ */ new Set(), l2 = /* @__PURE__ */ new Set();
          for (let [t11, r3] of Object.entries(e10)) {
            if (t11 === tO)
              throw new tZ(`"Node name ${tO} is reserved"`);
            if (r3.constructor === tY)
              r3.triggers.forEach((e11) => o2.add(e11));
            else
              throw new tZ(`Invalid node type ${typeof r3}, expected PregelNode`);
          }
          for (let e11 of o2)
            if (!(e11 in t10))
              throw new tZ(`Subcribed channel '${String(e11)}' not in channels`);
          if (Array.isArray(r2)) {
            if (r2.every((e11) => !o2.has(e11)))
              throw new tZ(`None of the input channels ${r2} are subscribed to by any node`);
          } else if (!o2.has(r2))
            throw new tZ(`Input channel ${String(r2)} is not subscribed to by any node`);
          for (let e11 of (Array.isArray(i2) ? i2.forEach((e12) => l2.add(e12)) : l2.add(i2), n2 && !Array.isArray(n2) ? l2.add(n2) : Array.isArray(n2) && n2.forEach((e12) => l2.add(e12)), l2))
            if (!(e11 in t10))
              throw new tZ(`Output channel '${String(e11)}' not in channels`);
          if (s2 && "*" !== s2) {
            for (let t11 of s2)
              if (!(t11 in e10))
                throw new tZ(`Node ${String(t11)} not in nodes`);
          }
          if (a2 && "*" !== a2) {
            for (let t11 of a2)
              if (!(t11 in e10))
                throw new tZ(`Node ${String(t11)} not in nodes`);
          }
        }({ nodes: this.nodes, channels: this.channels, outputChannels: this.outputChannels, inputChannels: this.inputChannels, streamChannels: this.streamChannels, interruptAfterNodes: this.interruptAfter, interruptBeforeNodes: this.interruptBefore }), this;
      }
      get streamChannelsList() {
        return Array.isArray(this.streamChannels) ? this.streamChannels : this.streamChannels ? [this.streamChannels] : Object.keys(this.channels);
      }
      get streamChannelsAsIs() {
        return this.streamChannels ? this.streamChannels : Object.keys(this.channels);
      }
      async getGraphAsync(e10) {
        return this.getGraph(e10);
      }
      *getSubgraphs(e10, t10) {
        for (let [r2, i2] of Object.entries(this.nodes))
          if (void 0 === e10 || e10.startsWith(r2))
            for (let n2 of i2.subgraphs?.length ? i2.subgraphs : [i2.bound]) {
              let i3 = t8(n2);
              if (void 0 !== i3) {
                if (r2 === e10) {
                  yield [r2, i3];
                  return;
                }
                if (void 0 === e10 && (yield [r2, i3]), t10) {
                  let n3 = e10;
                  for (let [s2, a2] of (void 0 !== e10 && (n3 = e10.slice(r2.length + 1)), i3.getSubgraphs(n3, t10)))
                    yield [`${r2}|${s2}`, a2];
                }
              }
            }
      }
      async *getSubgraphsAsync(e10, t10) {
        yield* this.getSubgraphs(e10, t10);
      }
      async _prepareStateSnapshot({ config: e10, saved: t10, subgraphCheckpointer: r2 }) {
        if (void 0 === t10)
          return { values: {}, next: [], config: e10, tasks: [] };
        let { managed: i2 } = await this.prepareSpecs(e10, { skipManaged: true }), n2 = tl(this.channels, t10.checkpoint), s2 = Object.values(rc(t10.checkpoint, t10.pendingWrites, this.nodes, n2, i2, t10.config, false, { step: (t10.metadata?.step ?? -1) + 1 })), a2 = await tG(this.getSubgraphsAsync()), o2 = t10.config.configurable?.checkpoint_ns ?? "", l2 = {};
        for (let e11 of s2) {
          let i3 = a2.find(([t11]) => t11 === e11.name);
          if (!i3)
            continue;
          let n3 = `${e11.name}:${e11.id}`;
          if (o2 && (n3 = `${o2}|${n3}`), void 0 === r2) {
            let r3 = { configurable: { thread_id: t10.config.configurable?.thread_id, checkpoint_ns: n3 } };
            l2[e11.id] = r3;
          } else {
            let s3 = { configurable: { [tm]: r2, thread_id: t10.config.configurable?.thread_id, checkpoint_ns: n3 } };
            l2[e11.id] = await i3[1].getState(s3, { subgraphs: true });
          }
        }
        return { values: t1(n2, this.streamChannelsAsIs), next: s2.map((e11) => e11.name), tasks: t9(s2, t10?.pendingWrites ?? [], l2), metadata: t10.metadata, config: rr(t10.config, t10.metadata), createdAt: t10.checkpoint.ts, parentConfig: t10.parentConfig };
      }
      async getState(e10, t10) {
        let r2 = e10.configurable?.[tm] ?? this.checkpointer;
        if (!r2)
          throw new e8("No checkpointer set");
        let i2 = e10.configurable?.checkpoint_ns ?? "";
        if ("" !== i2 && e10.configurable?.[tm] === void 0) {
          let n3 = i2.split("|").map((e11) => e11.split(":")[0]).join("|");
          for await (let [i3, s3] of this.getSubgraphsAsync(n3, true))
            if (i3 === n3)
              return await s3.getState(tF(e10, { [tm]: r2 }), { subgraphs: t10?.subgraphs });
          throw Error(`Subgraph with namespace "${n3}" not found.`);
        }
        let n2 = (0, g.t8)(this.config, e10), s2 = await r2.getTuple(e10);
        return await this._prepareStateSnapshot({ config: n2, saved: s2, subgraphCheckpointer: t10?.subgraphs ? r2 : void 0 });
      }
      async *getStateHistory(e10, t10) {
        let r2 = e10.configurable?.[tm] ?? this.checkpointer;
        if (!r2)
          throw Error("No checkpointer set");
        let i2 = e10.configurable?.checkpoint_ns ?? "";
        if ("" !== i2 && e10.configurable?.[tm] === void 0) {
          let n3 = i2.split("|").map((e11) => e11.split(":")[0]).join("|");
          for await (let [i3, s2] of this.getSubgraphsAsync(n3, true))
            if (i3 === n3) {
              yield* s2.getStateHistory(tF(e10, { [tm]: r2 }), t10);
              return;
            }
          throw Error(`Subgraph with namespace "${n3}" not found.`);
        }
        let n2 = (0, g.t8)(this.config, e10, { configurable: { checkpoint_ns: i2 } });
        for await (let e11 of r2.list(n2, t10))
          yield this._prepareStateSnapshot({ config: e11.config, saved: e11 });
      }
      async updateState(e10, t10, r2) {
        let i2 = e10.configurable?.[tm] ?? this.checkpointer;
        if (!i2)
          throw new e8("No checkpointer set");
        let n2 = e10.configurable?.checkpoint_ns ?? "";
        if ("" !== n2 && e10.configurable?.[tm] === void 0) {
          let s3 = n2.split("|").map((e11) => e11.split(":")[0]).join("|");
          for await (let [, n3] of this.getSubgraphsAsync(s3, true))
            return await n3.updateState(tF(e10, { [tm]: i2 }), t10, r2);
          throw Error(`Subgraph "${s3}" not found`);
        }
        let s2 = this.config ? (0, g.t8)(this.config, e10) : e10, a2 = await i2.getTuple(s2), o2 = void 0 !== a2 ? eQ(a2.checkpoint) : eJ(), l2 = { ...a2?.checkpoint.channel_versions }, c2 = a2?.metadata?.step ?? -1, u2 = tF(s2, { checkpoint_ns: s2.configurable?.checkpoint_ns ?? "" }), h2 = s2.metadata ?? {};
        if (a2?.config.configurable && (u2 = tF(s2, a2.config.configurable), h2 = { ...a2.metadata, ...h2 }), null == t10 && void 0 === r2)
          return rr(await i2.put(u2, tc(o2, void 0, c2), { source: "update", step: c2 + 1, writes: {}, parents: a2?.metadata?.parents ?? {} }, {}), a2 ? a2.metadata : void 0);
        let d2 = tl(this.channels, o2), { managed: p2 } = await this.prepareSpecs(s2, { skipManaged: true });
        if (null === t10 && "__end__" === r2) {
          if (a2) {
            let e11 = rc(o2, a2.pendingWrites || [], this.nodes, d2, p2, a2.config, true, { step: (a2.metadata?.step ?? -1) + 1, checkpointer: this.checkpointer || void 0, store: this.store }), t11 = (a2.pendingWrites || []).filter((e12) => e12[0] === tN).flatMap((e12) => e12.slice(1));
            for (let [r3, i3, n3] of (t11.length > 0 && rl(a2.checkpoint, d2, [{ name: tp, writes: t11, triggers: [] }]), a2.pendingWrites || []))
              ![tf, tO, "__scheduled__"].includes(i3) && r3 in e11 && e11[r3].writes.push([i3, n3]);
            rl(o2, d2, Object.values(e11));
          }
          return rr(await i2.put(u2, tc(o2, void 0, c2), { ...h2, source: "update", step: c2 + 1, writes: {}, parents: a2?.metadata?.parents ?? {} }, {}), a2 ? a2.metadata : void 0);
        }
        if (null == t10 && "__copy__" === r2)
          return rr(await i2.put(a2?.parentConfig ?? u2, tc(o2, void 0, c2), { source: "fork", step: c2 + 1, writes: {}, parents: a2?.metadata?.parents ?? {} }, {}), a2 ? a2.metadata : void 0);
        let f2 = Object.values(o2.versions_seen).map((e11) => Object.values(e11)).flat().find((e11) => !!e11);
        if (void 0 === r2 && void 0 === f2)
          "string" == typeof this.inputChannels && void 0 !== this.nodes[this.inputChannels] && (r2 = this.inputChannels);
        else if (void 0 === r2) {
          let e11 = Object.entries(o2.versions_seen).map(([e12, t11]) => Object.values(t11).map((t12) => [t12, e12])).flat().sort(([e12], [t11]) => eY(e12, t11));
          e11 && (1 === e11.length ? r2 = e11[0][1] : e11[e11.length - 1][0] !== e11[e11.length - 2][0] && (r2 = e11[e11.length - 1][1]));
        }
        if (void 0 === r2)
          throw new ti('Ambiguous update, specify "asNode"');
        if (void 0 === this.nodes[r2])
          throw new ti(`Node "${r2.toString()}" does not exist`);
        let b2 = this.nodes[r2].getWriters();
        if (!b2.length)
          throw new ti(`No writers found for node "${r2.toString()}"`);
        let m2 = { name: r2, input: t10, proc: b2.length > 1 ? g.lW.from(b2, { omitSequenceTags: true }) : b2[0], writes: [], triggers: [tO], id: A(tO, o2.id), writers: [] };
        await m2.proc.invoke(m2.input, (0, g.q)({ ...s2, store: s2?.store ?? this.store }, { runName: s2.runName ?? `${this.getName()}UpdateState`, configurable: { [tb]: (e11) => m2.writes.push(...e11), [tg]: (e11, t11 = false) => rs(c2, o2, d2, p2, m2, e11, t11) } }));
        let [y2, v2] = [m2.writes.filter((e11) => e11[0] !== tA), m2.writes.filter((e11) => e11[0] === tA)];
        void 0 !== a2 && y2.length > 0 && await i2.putWrites(u2, y2, m2.id), rl(o2, d2, [m2], i2.getNextVersion.bind(this.checkpointer));
        let w2 = re(l2, o2.channel_versions), _2 = await i2.put(u2, tc(o2, d2, c2 + 1), { source: "update", step: c2 + 1, writes: { [r2]: t10 }, parents: a2?.metadata?.parents ?? {} }, w2);
        return v2.length > 0 && await i2.putWrites(_2, v2, m2.id), rr(_2, a2 ? a2.metadata : void 0);
      }
      _defaults(e10) {
        let t10;
        let { debug: r2, streamMode: i2, inputKeys: n2, outputKeys: s2, interruptAfter: a2, interruptBefore: o2, ...l2 } = e10, c2 = true, u2 = void 0 !== r2 ? r2 : this.debug, h2 = s2;
        void 0 === h2 ? h2 = this.streamChannelsAsIs : tX(h2, this.channels);
        let d2 = n2;
        void 0 === d2 ? d2 = this.inputChannels : tX(d2, this.channels);
        let p2 = o2 ?? this.interruptBefore ?? [], f2 = a2 ?? this.interruptAfter ?? [];
        return void 0 !== i2 ? (t10 = Array.isArray(i2) ? i2 : [i2], c2 = "string" == typeof i2) : (t10 = this.streamMode, c2 = true), e10.configurable?.[tv] !== void 0 && (t10 = ["values"]), [u2, t10, d2, h2, l2, p2, f2, false === this.checkpointer ? void 0 : void 0 !== e10 && e10.configurable?.[tm] !== void 0 ? e10.configurable[tm] : this.checkpointer, e10.store ?? this.store, c2];
      }
      async stream(e10, t10) {
        let r2 = { recursionLimit: this.config?.recursionLimit, ...t10 };
        return super.stream(e10, r2);
      }
      async prepareSpecs(e10, t10) {
        let r2 = { ...e10, store: this.store }, i2 = {}, n2 = {};
        for (let [e11, r3] of Object.entries(this.channels))
          ta(r3) ? i2[e11] = r3 : t10?.skipManaged ? n2[e11] = { cls: rk, params: { config: {} } } : n2[e11] = r3;
        return { channelSpecs: i2, managed: new rw(await Object.entries(n2).reduce(async (e11, [t11, i3]) => {
          let n3;
          let s2 = await e11;
          return r_(i3) ? ("key" in i3.params && "__channel_key_placeholder__" === i3.params.key && (i3.params.key = t11), n3 = await i3.cls.initialize(r2, i3.params)) : n3 = await i3.initialize(r2), void 0 !== n3 && s2.push([t11, n3]), s2;
        }, Promise.resolve([]))) };
      }
      async *_streamIterator(e10, t10) {
        let r2, i2;
        let n2 = t10?.subgraphs, s2 = tW(this.config, t10);
        if (void 0 === s2.recursionLimit || s2.recursionLimit < 1)
          throw Error('Passed "recursionLimit" must be at least 1.');
        if (void 0 !== this.checkpointer && false !== this.checkpointer && void 0 === s2.configurable)
          throw Error('Checkpointer requires one or more of the following "configurable" keys: "thread_id", "checkpoint_ns", "checkpoint_id"');
        let { runId: a2, ...o2 } = s2, [l2, c2, , u2, h2, d2, p2, f2, b2, m2] = this._defaults(o2), y2 = new rp({ modes: new Set(c2) });
        if (c2.includes("messages")) {
          let e11 = new rP((e12) => y2.push(e12)), { callbacks: t11 } = h2;
          if (void 0 === t11)
            h2.callbacks = [e11];
          else if (Array.isArray(t11))
            h2.callbacks = t11.concat(e11);
          else {
            let r3 = t11.copy();
            r3.addHandler(e11, true), h2.callbacks = r3;
          }
        }
        c2.includes("custom") && (h2.writer = (e11) => y2.push([[], "custom", e11]));
        let v2 = await (0, g.Le)(h2), w2 = await v2?.handleChainStart(this.toJSON(), !e10 || Array.isArray(e10) || e10 instanceof Date || "object" != typeof e10 ? { input: e10 } : e10, a2, void 0, void 0, void 0, h2?.runName ?? this.getName()), { channelSpecs: _2, managed: k2 } = await this.prepareSpecs(h2), O2 = (async () => {
          try {
            for (r2 = await rf.initialize({ input: e10, config: h2, checkpointer: f2, nodes: this.nodes, channelSpecs: _2, managed: k2, outputKeys: u2, streamKeys: this.streamChannelsAsIs, store: b2, stream: y2 }), t10?.subgraphs && (r2.config.configurable = { ...r2.config.configurable, [tw]: r2.stream }); await r2.tick({ inputKeys: this.inputChannels, interruptAfter: p2, interruptBefore: d2, manager: w2 }); ) {
              if (l2) {
                var n3, s3, a3;
                n3 = r2.checkpointMetadata.step, s3 = r2.channels, a3 = this.streamChannelsList, console.log([`${t3(t6.blue, `[${n3}:checkpoint]`)}`, `\x1B[1m State at the end of step ${n3}:\x1B[0m
`, JSON.stringify(t1(s3, a3), null, 2)].join(""));
              }
              for await (let { task: e11, error: t11 } of (l2 && function(e12, t12) {
                let r3 = t12.length;
                console.log([`${t3(t6.blue, `[${e12}:tasks]`)}`, `\x1B[1m Starting step ${e12} with ${r3} task${1 === r3 ? "" : "s"}:\x1B[0m
`, t12.map((e13) => `- ${t3(t6.green, String(e13.name))} -> ${JSON.stringify(e13.input, null, 2)}`).join("\n")].join(""));
              }(r2.step, Object.values(r2.tasks)), rm(Object.values(r2.tasks).filter((e12) => 0 === e12.writes.length), { stepTimeout: this.stepTimeout, signal: h2.signal, retryPolicy: this.retryPolicy })))
                if (void 0 !== t11) {
                  if (e7(t11)) {
                    if (r2.isNested)
                      throw t11;
                    te(t11) && t11.interrupts.length && r2.putWrites(e11.id, t11.interrupts.map((e12) => [tO, e12]));
                  } else
                    throw r2.putWrites(e11.id, [[tf, { message: t11.message, name: t11.name }]]), t11;
                } else
                  r2.putWrites(e11.id, e11.writes);
              l2 && function(e11, t11, r3) {
                let i3 = {};
                for (let [e12, n4] of t11)
                  r3.includes(e12) && (i3[e12] || (i3[e12] = []), i3[e12].push(n4));
                console.log([`${t3(t6.blue, `[${e11}:writes]`)}`, `\x1B[1m Finished step ${e11} with writes to ${Object.keys(i3).length} channel${1 !== Object.keys(i3).length ? "s" : ""}:\x1B[0m
`, Object.entries(i3).map(([e12, t12]) => `- ${t3(t6.yellow, e12)} -> ${t12.map((e13) => JSON.stringify(e13)).join(", ")}`).join("\n")].join(""));
              }(r2.step, Object.values(r2.tasks).map((e11) => e11.writes).flat(), this.streamChannelsList);
            }
            if ("out_of_steps" === r2.status)
              throw new e4(`Recursion limit of ${h2.recursionLimit} reached without hitting a stop condition. You can increase the limit by setting the "recursionLimit" config key.`, { lc_error_code: "GRAPH_RECURSION_LIMIT" });
          } catch (e11) {
            i2 = e11;
          } finally {
            try {
              r2 && await r2.store?.stop(), await Promise.all([...r2?.checkpointerPromises ?? [], ...Array.from(k2.values()).map((e11) => e11.promises())]);
            } catch (e11) {
              i2 = i2 ?? e11;
            }
            i2 ? y2.error(i2) : y2.close();
          }
        })();
        try {
          for await (let e11 of y2) {
            if (void 0 === e11)
              throw Error("Data structure error.");
            let [t11, r3, i3] = e11;
            c2.includes(r3) && (n2 && !m2 ? yield [t11, r3, i3] : m2 ? n2 ? yield [t11, i3] : yield i3 : yield [r3, i3]);
          }
        } catch (e11) {
          throw await w2?.handleChainError(i2), e11;
        } finally {
          await O2;
        }
        await w2?.handleChainEnd(r2?.output ?? {});
      }
      async invoke(e10, t10) {
        let r2 = t10?.streamMode ?? "values", i2 = { ...t10, outputKeys: t10?.outputKeys ?? this.outputChannels, streamMode: r2 }, n2 = [];
        for await (let t11 of await this.stream(e10, i2))
          n2.push(t11);
        return "values" === r2 ? n2[n2.length - 1] : n2;
      }
    }
    class rC extends to {
      constructor(e10, t10) {
        super(), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "BinaryOperatorAggregate" }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "operator", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "initialValueFactory", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.operator = e10, this.initialValueFactory = t10, this.value = t10?.();
      }
      fromCheckpoint(e10) {
        let t10 = new rC(this.operator, this.initialValueFactory);
        return e10 && (t10.value = e10), t10;
      }
      update(e10) {
        let t10 = e10;
        if (!t10.length)
          return false;
        for (let e11 of (void 0 === this.value && ([this.value] = t10, t10 = t10.slice(1)), t10))
          void 0 !== this.value && (this.value = this.operator(this.value, e11));
        return true;
      }
      get() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
      checkpoint() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
    }
    class rA extends to {
      constructor(e10 = true) {
        super(), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "EphemeralValue" }), Object.defineProperty(this, "guard", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.guard = e10;
      }
      fromCheckpoint(e10) {
        let t10 = new rA(this.guard);
        return e10 && (t10.value = e10), t10;
      }
      update(e10) {
        if (0 === e10.length) {
          let e11 = void 0 !== this.value;
          return this.value = void 0, e11;
        }
        if (1 !== e10.length && this.guard)
          throw new ti("EphemeralValue can only receive one value per step.");
        return this.value = e10[e10.length - 1], true;
      }
      get() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
      checkpoint() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
    }
    let rx = "__start__", rN = "__end__";
    class r$ {
      constructor(e10) {
        Object.defineProperty(this, "condition", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ends", { enumerable: true, configurable: true, writable: true, value: void 0 }), g.eq.isRunnable(e10.path) ? this.condition = e10.path : this.condition = (0, g.k9)(e10.path).withConfig({ runName: "Branch" }), this.ends = Array.isArray(e10.pathMap) ? e10.pathMap.reduce((e11, t10) => (e11[t10] = t10, e11), {}) : e10.pathMap;
      }
      run(e10, t10) {
        return tH.registerWriter(new tV({ trace: false, func: async (r2, i2) => {
          try {
            return await this._route(r2, i2, e10, t10);
          } catch (e11) {
            throw e11.name === e3.unminifiable_name && console.warn("[WARN]: 'NodeInterrupt' thrown in conditional edge. This is likely a bug in your graph implementation.\nNodeInterrupt should only be thrown inside a node, not in edge conditions."), e11;
          }
        } }));
      }
      async _route(e10, t10, r2, i2) {
        let n2, s2 = await this.condition.invoke(i2 ? i2(t10) : e10, t10);
        if (Array.isArray(s2) || (s2 = [s2]), (n2 = this.ends ? s2.map((e11) => tT(e11) ? e11 : this.ends[e11]) : s2).some((e11) => !e11))
          throw Error("Branch condition returned unknown or null destination");
        if (n2.filter(tT).some((e11) => e11.node === rN))
          throw new ti("Cannot send a packet to the END node");
        return await r2(n2, t10) ?? e10;
      }
    }
    class rT {
      constructor() {
        Object.defineProperty(this, "nodes", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "edges", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "branches", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "entryPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "compiled", { enumerable: true, configurable: true, writable: true, value: false }), this.nodes = {}, this.edges = /* @__PURE__ */ new Set(), this.branches = {};
      }
      warnIfCompiled(e10) {
        this.compiled && console.warn(e10);
      }
      get allEdges() {
        return this.edges;
      }
      addNode(e10, t10, r2) {
        for (let t11 of ["|", ":"])
          if (e10.includes(t11))
            throw Error(`"${t11}" is a reserved character and is not allowed in node names.`);
        if (this.warnIfCompiled("Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph."), e10 in this.nodes)
          throw Error(`Node \`${e10}\` already present.`);
        if (e10 === rN)
          throw Error(`Node \`${e10}\` is reserved.`);
        let i2 = (0, g.k9)(t10);
        return this.nodes[e10] = { runnable: i2, metadata: r2?.metadata, subgraphs: t4(i2) ? [i2] : r2?.subgraphs }, this;
      }
      addEdge(e10, t10) {
        if (this.warnIfCompiled("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph."), e10 === rN)
          throw Error("END cannot be a start node");
        if (t10 === rx)
          throw Error("START cannot be an end node");
        if (Array.from(this.edges).some(([t11]) => t11 === e10) && !("channels" in this))
          throw Error(`Already found path for ${e10}. For multiple edges, use StateGraph.`);
        return this.edges.add([e10, t10]), this;
      }
      addConditionalEdges(e10, t10, r2) {
        let i2 = "object" == typeof e10 ? e10 : { source: e10, path: t10, pathMap: r2 };
        if (this.warnIfCompiled("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph."), !g.eq.isRunnable(i2.path)) {
          let e11 = Array.isArray(i2.pathMap) ? i2.pathMap.join(",") : Object.keys(i2.pathMap ?? {}).join(",");
          i2.path = (0, g.k9)(i2.path).withConfig({ runName: `Branch<${i2.source}${"" !== e11 ? `,${e11}` : ""}>`.slice(0, 63) });
        }
        let n2 = "RunnableLambda" === i2.path.getName() ? "condition" : i2.path.getName();
        if (this.branches[i2.source] && this.branches[i2.source][n2])
          throw Error(`Condition \`${n2}\` already present for node \`${e10}\``);
        return this.branches[i2.source] || (this.branches[i2.source] = {}), this.branches[i2.source][n2] = new r$(i2), this;
      }
      setEntryPoint(e10) {
        return this.warnIfCompiled("Setting the entry point of a graph that has already been compiled. This will not be reflected in the compiled graph."), this.addEdge(rx, e10);
      }
      setFinishPoint(e10) {
        return this.warnIfCompiled("Setting a finish point of a graph that has already been compiled. This will not be reflected in the compiled graph."), this.addEdge(e10, rN);
      }
      compile({ checkpointer: e10, interruptBefore: t10, interruptAfter: r2 } = {}) {
        this.validate([...Array.isArray(t10) ? t10 : [], ...Array.isArray(r2) ? r2 : []]);
        let i2 = new rR({ builder: this, checkpointer: e10, interruptAfter: r2, interruptBefore: t10, autoValidate: false, nodes: {}, channels: { [rx]: new rA(), [rN]: new rA() }, inputChannels: rx, outputChannels: rN, streamChannels: [], streamMode: "values" });
        for (let [e11, t11] of Object.entries(this.nodes))
          i2.attachNode(e11, t11);
        for (let [e11, t11] of this.edges)
          i2.attachEdge(e11, t11);
        for (let [e11, t11] of Object.entries(this.branches))
          for (let [r3, n2] of Object.entries(t11))
            i2.attachBranch(e11, r3, n2);
        return i2.validate();
      }
      validate(e10) {
        let t10 = new Set([...this.allEdges].map(([e11, t11]) => e11));
        for (let [e11] of Object.entries(this.branches))
          t10.add(e11);
        for (let e11 of t10)
          if (e11 !== rx && !(e11 in this.nodes))
            throw Error(`Found edge starting at unknown node \`${e11}\``);
        let r2 = new Set([...this.allEdges].map(([e11, t11]) => t11));
        for (let [e11, t11] of Object.entries(this.branches))
          for (let i2 of Object.values(t11))
            if (i2.ends)
              for (let e12 of Object.values(i2.ends))
                r2.add(e12);
            else
              for (let t12 of (r2.add(rN), Object.keys(this.nodes)))
                t12 !== e11 && r2.add(t12);
        for (let e11 of Object.keys(this.nodes))
          if (!r2.has(e11))
            throw Error(`Node \`${e11}\` is not reachable`);
        for (let e11 of r2)
          if (e11 !== rN && !(e11 in this.nodes))
            throw Error(`Found edge ending at unknown node \`${e11}\``);
        if (e10) {
          for (let t11 of e10)
            if (!(t11 in this.nodes))
              throw Error(`Interrupt node \`${t11}\` is not present`);
        }
        this.compiled = true;
      }
    }
    class rR extends rE {
      constructor({ builder: e10, ...t10 }) {
        super(t10), Object.defineProperty(this, "builder", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.builder = e10;
      }
      attachNode(e10, t10) {
        this.channels[e10] = new rA(), this.nodes[e10] = new tY({ channels: [], triggers: [], metadata: t10.metadata, subgraphs: t10.subgraphs }).pipe(t10.runnable).pipe(new tH([{ channel: e10, value: tU }], [tS])), this.streamChannels.push(e10);
      }
      attachEdge(e10, t10) {
        if (t10 === rN) {
          if (e10 === rx)
            throw Error("Cannot have an edge from START to END");
          this.nodes[e10].writers.push(new tH([{ channel: rN, value: tU }], [tS]));
        } else
          this.nodes[t10].triggers.push(e10), this.nodes[t10].channels.push(e10);
      }
      attachBranch(e10, t10, r2) {
        for (let i2 of (e10 === rx && this.nodes[rx] && (this.nodes[rx] = rS.subscribeTo(rx, { tags: [tS] })), this.nodes[e10].pipe(r2.run((r3) => new tH(r3.map((r4) => tT(r4) ? r4 : { channel: r4 === rN ? rN : `branch:${e10}:${t10}:${r4}`, value: tU }), [tS]))), r2.ends ? Object.values(r2.ends) : Object.keys(this.nodes)))
          if (i2 !== rN) {
            let r3 = `branch:${e10}:${t10}:${i2}`;
            this.channels[r3] = new rA(), this.nodes[i2].triggers.push(r3), this.nodes[i2].channels.push(r3);
          }
      }
      async getGraphAsync(e10) {
        let t10 = e10?.xray, r2 = new tu.k(), i2 = { [rx]: r2.addNode({ schema: th.z.any() }, rx) }, n2 = {}, s2 = {};
        function a2(e11, t11, s3, a3 = false) {
          return t11 === rN && void 0 === n2[rN] && (n2[rN] = r2.addNode({ schema: th.z.any() }, rN)), r2.addEdge(i2[e11], n2[t11], s3 !== t11 ? s3 : void 0, a3);
        }
        for (let [a3, l2] of (t10 && (s2 = Object.fromEntries((await tG(this.getSubgraphsAsync())).filter((e11) => rI(e11[1])))), Object.entries(this.builder.nodes))) {
          let c2 = rM(a3), u2 = l2.runnable, h2 = l2.metadata ?? {};
          if (this.interruptBefore?.includes(a3) && this.interruptAfter?.includes(a3) ? h2.__interrupt = "before,after" : this.interruptBefore?.includes(a3) ? h2.__interrupt = "before" : this.interruptAfter?.includes(a3) && (h2.__interrupt = "after"), t10) {
            let l3 = "number" == typeof t10 ? t10 - 1 : t10, d2 = void 0 !== s2[a3] ? await s2[a3].getGraphAsync({ ...e10, xray: l3 }) : u2.getGraph(e10);
            if (d2.trimFirstNode(), d2.trimLastNode(), Object.keys(d2.nodes).length > 1) {
              let o2 = function(e12, t12) {
                if (void 0 !== e12 && !(0, k.Z)(e12))
                  return e12;
                if (!t12 || !t12.lc_runnable)
                  return t12.name ?? "UnknownSchema";
                try {
                  let e13 = t12.getName();
                  return e13 = e13.startsWith("Runnable") ? e13.slice(8) : e13;
                } catch (e13) {
                  return t12.getName();
                }
              };
              let [e11, t11] = r2.extend(d2, c2);
              if (void 0 === e11)
                throw Error(`Could not extend subgraph "${a3}" due to missing entrypoint.`);
              void 0 !== t11 && (i2[c2] = { name: o2(t11.id, t11.data), ...t11 }), n2[c2] = { name: o2(e11.id, e11.data), ...e11 };
            } else {
              let e11 = r2.addNode(u2, c2, h2);
              i2[c2] = e11, n2[c2] = e11;
            }
          } else {
            let e11 = r2.addNode(u2, c2, h2);
            i2[c2] = e11, n2[c2] = e11;
          }
        }
        for (let [e11, t11] of [...this.builder.allEdges].sort(([e12], [t12]) => e12 < t12 ? -1 : t12 > e12 ? 1 : 0))
          a2(rM(e11), rM(t11));
        for (let [e11, t11] of Object.entries(this.builder.branches)) {
          let r3 = { ...Object.fromEntries(Object.keys(this.builder.nodes).filter((t12) => t12 !== e11).map((e12) => [rM(e12), rM(e12)])), [rN]: rN };
          for (let i3 of Object.values(t11))
            for (let [t12, n3] of Object.entries(void 0 !== i3.ends ? i3.ends : r3))
              a2(rM(e11), rM(n3), t12, true);
        }
        return r2;
      }
      getGraph(e10) {
        let t10 = e10?.xray, r2 = new tu.k(), i2 = { [rx]: r2.addNode({ schema: th.z.any() }, rx) }, n2 = {}, s2 = {};
        function a2(e11, t11, s3, a3 = false) {
          return t11 === rN && void 0 === n2[rN] && (n2[rN] = r2.addNode({ schema: th.z.any() }, rN)), r2.addEdge(i2[e11], n2[t11], s3 !== t11 ? s3 : void 0, a3);
        }
        for (let [a3, l2] of (t10 && (s2 = Object.fromEntries(tB(this.getSubgraphs()).filter((e11) => rI(e11[1])))), Object.entries(this.builder.nodes))) {
          let c2 = rM(a3), u2 = l2.runnable, h2 = l2.metadata ?? {};
          if (this.interruptBefore?.includes(a3) && this.interruptAfter?.includes(a3) ? h2.__interrupt = "before,after" : this.interruptBefore?.includes(a3) ? h2.__interrupt = "before" : this.interruptAfter?.includes(a3) && (h2.__interrupt = "after"), t10) {
            let l3 = "number" == typeof t10 ? t10 - 1 : t10, d2 = void 0 !== s2[a3] ? s2[a3].getGraph({ ...e10, xray: l3 }) : u2.getGraph(e10);
            if (d2.trimFirstNode(), d2.trimLastNode(), Object.keys(d2.nodes).length > 1) {
              let o2 = function(e12, t12) {
                if (void 0 !== e12 && !(0, k.Z)(e12))
                  return e12;
                if (!t12 || !t12.lc_runnable)
                  return t12.name ?? "UnknownSchema";
                try {
                  let e13 = t12.getName();
                  return e13 = e13.startsWith("Runnable") ? e13.slice(8) : e13;
                } catch (e13) {
                  return t12.getName();
                }
              };
              let [e11, t11] = r2.extend(d2, c2);
              if (void 0 === e11)
                throw Error(`Could not extend subgraph "${a3}" due to missing entrypoint.`);
              void 0 !== t11 && (i2[c2] = { name: o2(t11.id, t11.data), ...t11 }), n2[c2] = { name: o2(e11.id, e11.data), ...e11 };
            } else {
              let e11 = r2.addNode(u2, c2, h2);
              i2[c2] = e11, n2[c2] = e11;
            }
          } else {
            let e11 = r2.addNode(u2, c2, h2);
            i2[c2] = e11, n2[c2] = e11;
          }
        }
        for (let [e11, t11] of [...this.builder.allEdges].sort(([e12], [t12]) => e12 < t12 ? -1 : t12 > e12 ? 1 : 0))
          a2(rM(e11), rM(t11));
        for (let [e11, t11] of Object.entries(this.builder.branches)) {
          let r3 = { ...Object.fromEntries(Object.keys(this.builder.nodes).filter((t12) => t12 !== e11).map((e12) => [rM(e12), rM(e12)])), [rN]: rN };
          for (let i3 of Object.values(t11))
            for (let [t12, n3] of Object.entries(void 0 !== i3.ends ? i3.ends : r3))
              a2(rM(e11), rM(n3), t12, true);
        }
        return r2;
      }
    }
    function rI(e10) {
      return "function" == typeof e10.attachNode && "function" == typeof e10.attachEdge;
    }
    function rM(e10) {
      return "subgraph" === e10 ? `"${e10}"` : e10;
    }
    let rL = (e10, t10) => e10.size === t10.size && [...e10].every((e11) => t10.has(e11));
    class rD extends to {
      constructor(e10) {
        super(), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "NamedBarrierValue" }), Object.defineProperty(this, "names", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "seen", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.names = e10, this.seen = /* @__PURE__ */ new Set();
      }
      fromCheckpoint(e10) {
        let t10 = new rD(this.names);
        return e10 && (t10.seen = new Set(e10)), t10;
      }
      update(e10) {
        let t10 = false;
        for (let r2 of e10)
          if (this.names.has(r2))
            this.seen.has(r2) || (this.seen.add(r2), t10 = true);
          else
            throw new ti(`Value ${JSON.stringify(r2)} not in names ${JSON.stringify(this.names)}`);
        return t10;
      }
      get() {
        if (!rL(this.names, this.seen))
          throw new tr();
      }
      checkpoint() {
        return [...this.seen];
      }
      consume() {
        return !!(this.seen && this.names && rL(this.seen, this.names)) && (this.seen = /* @__PURE__ */ new Set(), true);
      }
    }
    class rW extends to {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "LastValue" }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, writable: true, value: void 0 });
      }
      fromCheckpoint(e10) {
        let t10 = new rW();
        return e10 && (t10.value = e10), t10;
      }
      update(e10) {
        if (0 === e10.length)
          return false;
        if (1 !== e10.length)
          throw new ti("LastValue can only receive one value per step.", { lc_error_code: "INVALID_CONCURRENT_GRAPH_UPDATE" });
        return this.value = e10[e10.length - 1], true;
      }
      get() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
      checkpoint() {
        if (void 0 === this.value)
          throw new tr();
        return this.value;
      }
    }
    class rV {
      constructor(e10) {
        Object.defineProperty(this, "lc_graph_name", { enumerable: true, configurable: true, writable: true, value: "AnnotationRoot" }), Object.defineProperty(this, "spec", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.spec = e10;
      }
    }
    let rK = function(e10) {
      return r_(e10) ? e10 : e10 ? rG(e10) : new rW();
    };
    function rG(e10) {
      return "object" == typeof e10 && e10 && "reducer" in e10 && e10.reducer ? new rC(e10.reducer, e10.default) : "object" == typeof e10 && e10 && "value" in e10 && e10.value ? new rC(e10.value, e10.default) : new rW();
    }
    rK.Root = (e10) => new rV(e10);
    let rB = "__root__";
    class rF extends rT {
      constructor(e10, t10) {
        if (super(), Object.defineProperty(this, "channels", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "waitingEdges", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_schemaDefinition", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_inputDefinition", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_outputDefinition", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_schemaDefinitions", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), Object.defineProperty(this, "_configSchema", { enumerable: true, configurable: true, writable: true, value: void 0 }), function(e11) {
          return "object" == typeof e11 && null !== e11 && void 0 === e11.stateSchema && void 0 !== e11.input && void 0 !== e11.output;
        }(e10))
          this._schemaDefinition = e10.input.spec, this._inputDefinition = e10.input.spec, this._outputDefinition = e10.output.spec;
        else if (function(e11) {
          return "object" == typeof e11 && null !== e11 && void 0 !== e11.stateSchema;
        }(e10))
          this._schemaDefinition = e10.stateSchema.spec, this._inputDefinition = e10.input?.spec ?? this._schemaDefinition, this._outputDefinition = e10.output?.spec ?? this._schemaDefinition;
        else if (function(e11) {
          return "object" == typeof e11 && null !== e11 && !Array.isArray(e11) && Object.keys(e11).length > 0 && Object.values(e11).every((e12) => "function" == typeof e12 || ta(e12));
        }(e10) || rU(e10)) {
          let t11 = rU(e10) ? e10.spec : e10;
          this._schemaDefinition = t11;
        } else if (function(e11) {
          return "object" == typeof e11 && null !== e11 && void 0 !== e11.channels;
        }(e10)) {
          let t11 = function(e11) {
            let t12 = {};
            for (let [r2, i2] of Object.entries(e11))
              t12[r2] = rG(i2);
            return t12;
          }(e10.channels);
          this._schemaDefinition = t11;
        } else
          throw Error("Invalid StateGraph input.");
        this._inputDefinition = this._inputDefinition ?? this._schemaDefinition, this._outputDefinition = this._outputDefinition ?? this._schemaDefinition, this._addSchema(this._schemaDefinition), this._addSchema(this._inputDefinition), this._addSchema(this._outputDefinition), this._configSchema = t10?.spec;
      }
      get allEdges() {
        return /* @__PURE__ */ new Set([...this.edges, ...Array.from(this.waitingEdges).flatMap(([e10, t10]) => e10.map((e11) => [e11, t10]))]);
      }
      _addSchema(e10) {
        if (!this._schemaDefinitions.has(e10))
          for (let [t10, r2] of (this._schemaDefinitions.set(e10, e10), Object.entries(e10))) {
            let e11;
            if (e11 = "function" == typeof r2 ? r2() : r2, void 0 !== this.channels[t10]) {
              if (this.channels[t10] !== e11 && !r_(e11) && "LastValue" !== e11.lc_graph_name)
                throw Error(`Channel "${t10}" already exists with a different type.`);
            } else
              this.channels[t10] = e11;
          }
      }
      addNode(e10, t10, r2) {
        let i2;
        if (e10 in this.channels)
          throw Error(`${e10} is already being used as a state attribute (a.k.a. a channel), cannot also be used as a node name.`);
        for (let t11 of ["|", ":"])
          if (e10.includes(t11))
            throw Error(`"${t11}" is a reserved character and is not allowed in node names.`);
        if (this.warnIfCompiled("Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph."), e10 in this.nodes)
          throw Error(`Node \`${e10}\` already present.`);
        if (e10 === rN || e10 === rx)
          throw Error(`Node \`${e10}\` is reserved.`);
        r2?.input !== void 0 && this._addSchema(r2.input.spec);
        let n2 = { runnable: i2 = g.eq.isRunnable(t10) ? t10 : "function" == typeof t10 ? new tV({ func: t10, name: e10, trace: false }) : (0, g.k9)(t10), retryPolicy: r2?.retryPolicy, metadata: r2?.metadata, input: r2?.input?.spec ?? this._schemaDefinition, subgraphs: t4(i2) ? [i2] : r2?.subgraphs };
        return this.nodes[e10] = n2, this;
      }
      addEdge(e10, t10) {
        if ("string" == typeof e10)
          return super.addEdge(e10, t10);
        for (let t11 of (this.compiled && console.warn("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph."), e10)) {
          if (t11 === rN)
            throw Error("END cannot be a start node");
          if (!Object.keys(this.nodes).some((e11) => e11 === t11))
            throw Error(`Need to add a node named "${t11}" first`);
        }
        if (t10 === rN)
          throw Error("END cannot be an end node");
        if (!Object.keys(this.nodes).some((e11) => e11 === t10))
          throw Error(`Need to add a node named "${t10}" first`);
        return this.waitingEdges.add([e10, t10]), this;
      }
      compile({ checkpointer: e10, store: t10, interruptBefore: r2, interruptAfter: i2 } = {}) {
        this.validate([...Array.isArray(r2) ? r2 : [], ...Array.isArray(i2) ? i2 : []]);
        let n2 = Object.keys(this._schemaDefinitions.get(this._outputDefinition)), s2 = 1 === n2.length && n2[0] === rB ? rB : n2, a2 = Object.keys(this.channels), o2 = 1 === a2.length && a2[0] === rB ? rB : a2, l2 = new rq({ builder: this, checkpointer: e10, interruptAfter: i2, interruptBefore: r2, autoValidate: false, nodes: {}, channels: { ...this.channels, [rx]: new rA() }, inputChannels: rx, outputChannels: s2, streamChannels: o2, streamMode: "updates", store: t10 });
        for (let [e11, t11] of (l2.attachNode(rx), Object.entries(this.nodes)))
          l2.attachNode(e11, t11);
        for (let [e11] of (l2.attachBranch(rx, tE, rH(), { withReader: false }), Object.entries(this.nodes)))
          l2.attachBranch(e11, tE, rH(), { withReader: false });
        for (let [e11, t11] of this.edges)
          l2.attachEdge(e11, t11);
        for (let [e11, t11] of this.waitingEdges)
          l2.attachEdge(e11, t11);
        for (let [e11, t11] of Object.entries(this.branches))
          for (let [r3, i3] of Object.entries(t11))
            l2.attachBranch(e11, r3, i3);
        return l2.validate();
      }
    }
    class rq extends rR {
      attachNode(e10, t10) {
        function r2(e11) {
          return tI(e11) ? e11.graph === tR.PARENT ? tq : e11.update : e11;
        }
        let i2 = Object.keys(this.builder.channels).map((t11) => t11 === rB ? { channel: t11, value: tU, skipNone: true, mapper: new tV({ func: r2, trace: false, recurse: false }) } : { channel: t11, value: tU, mapper: new tV({ func: function t12(r3, i3) {
          if (!i3)
            return tq;
          if (tI(i3))
            return i3.graph === tR.PARENT ? tq : t12(r3, i3.update);
          if (!("object" != typeof i3 || Array.isArray(i3)))
            return r3 in i3 ? i3[r3] : tq;
          {
            let t13 = Array.isArray(i3) ? "array" : typeof i3;
            throw new ti(`Expected node "${e10.toString()}" to return an object, received ${t13}`, { lc_error_code: "INVALID_GRAPH_NODE_RETURN_VALUE" });
          }
        }.bind(null, t11), trace: false, recurse: false }) });
        if (e10 === rx)
          this.nodes[e10] = new tY({ tags: [tS], triggers: [rx], channels: [rx], writers: [new tH(i2, [tS])] });
        else {
          let r3 = t10?.input ?? this.builder._schemaDefinition, n2 = Object.fromEntries(Object.keys(this.builder._schemaDefinitions.get(r3)).map((e11) => [e11, e11])), s2 = 1 === Object.keys(n2).length && rB in n2;
          this.channels[e10] = new rA(false), this.nodes[e10] = new tY({ triggers: [], channels: s2 ? Object.keys(n2) : n2, writers: [new tH(i2.concat({ channel: e10, value: e10 }), [tS])], mapper: s2 ? void 0 : (e11) => Object.fromEntries(Object.entries(e11).filter(([e12]) => e12 in n2)), bound: t10?.runnable, metadata: t10?.metadata, retryPolicy: t10?.retryPolicy, subgraphs: t10?.subgraphs });
        }
      }
      attachEdge(e10, t10) {
        if (t10 !== rN) {
          if (Array.isArray(e10)) {
            let r2 = `join:${e10.join("+")}:${t10}`;
            for (let i2 of (this.channels[r2] = new rD(new Set(e10)), this.nodes[t10].triggers.push(r2), e10))
              this.nodes[i2].writers.push(new tH([{ channel: r2, value: i2 }], [tS]));
          } else if (e10 === rx) {
            let e11 = `${rx}:${t10}`;
            this.channels[e11] = new rA(), this.nodes[t10].triggers.push(e11), this.nodes[rx].writers.push(new tH([{ channel: e11, value: rx }], [tS]));
          } else
            this.nodes[t10].triggers.push(e10);
        }
      }
      attachBranch(e10, t10, r2, i2 = { withReader: true }) {
        let n2 = async (r3, i3) => {
          let n3 = r3.filter((e11) => e11 !== rN);
          if (!n3.length)
            return;
          let s2 = n3.map((r4) => tT(r4) ? r4 : { channel: `branch:${e10}:${t10}:${r4}`, value: e10 });
          await tH.doWrite({ ...i3, tags: (i3.tags ?? []).concat([tS]) }, s2);
        };
        for (let s2 of (this.nodes[e10].writers.push(r2.run(n2, i2.withReader ? (e11) => tJ.doRead(e11, this.streamChannels ?? this.outputChannels, true) : void 0)), r2.ends ? Object.values(r2.ends) : Object.keys(this.builder.nodes))) {
          if (s2 === rN)
            continue;
          let r3 = `branch:${e10}:${t10}:${s2}`;
          this.channels[r3] = new rA(false), this.nodes[s2].triggers.push(r3);
        }
      }
    }
    function rU(e10) {
      return "object" == typeof e10 && null !== e10 && "lc_graph_name" in e10 && "AnnotationRoot" === e10.lc_graph_name;
    }
    function rz(e10) {
      if (tT(e10))
        return [e10];
      if (!tI(e10))
        return [];
      if (e10.graph === tR.PARENT)
        throw new e9(e10);
      return Array.isArray(e10.goto) ? e10.goto : [e10.goto];
    }
    function rH() {
      return new r$({ path: new tV({ func: rz, tags: [tS], trace: false, recurse: false }) });
    }
    r(3406);
    let rJ = rK.Root({ messages: rK({ reducer: function(e10, t10) {
      let r2 = Array.isArray(e10) ? e10 : [e10], i2 = Array.isArray(t10) ? t10 : [t10], n2 = r2.map(rj.E1), s2 = i2.map(rj.E1);
      for (let e11 of n2)
        (null === e11.id || void 0 === e11.id) && (e11.id = (0, rO.Z)(), e11.lc_kwargs.id = e11.id);
      for (let e11 of s2)
        (null === e11.id || void 0 === e11.id) && (e11.id = (0, rO.Z)(), e11.lc_kwargs.id = e11.id);
      let a2 = new Map(n2.map((e11, t11) => [e11.id, t11])), o2 = [...n2], l2 = /* @__PURE__ */ new Set();
      for (let e11 of s2) {
        let t11 = a2.get(e11.id);
        if (void 0 !== t11)
          "remove" === e11._getType() ? l2.add(e11.id) : o2[t11] = e11;
        else {
          if ("remove" === e11._getType())
            throw Error(`Attempting to delete a message with an ID that doesn't exist ('${e11.id}')`);
          o2.push(e11);
        }
      }
      return o2.filter((e11) => !l2.has(e11.id));
    }, default: () => [] }) });
    class rQ extends tV {
      constructor(e10, t10) {
        let { name: r2, tags: i2, handleToolErrors: n2 } = t10 ?? {};
        super({ name: r2, tags: i2, func: (e11, t11) => this.run(e11, t11) }), Object.defineProperty(this, "tools", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "handleToolErrors", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "trace", { enumerable: true, configurable: true, writable: true, value: false }), this.tools = e10, this.handleToolErrors = n2 ?? this.handleToolErrors;
      }
      async run(e10, t10) {
        let r2 = Array.isArray(e10) ? e10[e10.length - 1] : e10.messages[e10.messages.length - 1];
        if (r2?._getType() !== "ai")
          throw Error("ToolNode only accepts AIMessages as input.");
        let i2 = await Promise.all(r2.tool_calls?.map(async (e11) => {
          let r3 = this.tools.find((t11) => t11.name === e11.name);
          try {
            if (void 0 === r3)
              throw Error(`Tool "${e11.name}" not found.`);
            let i3 = await r3.invoke({ ...e11, type: "tool_call" }, t10);
            if (rj.QW(i3) && "tool" === i3._getType())
              return i3;
            return new rj.Cq({ name: r3.name, content: "string" == typeof i3 ? i3 : JSON.stringify(i3), tool_call_id: e11.id });
          } catch (t11) {
            if (!this.handleToolErrors || te(t11.name))
              throw t11;
            return new rj.Cq({ content: `Error: ${t11.message}
 Please fix your mistakes.`, name: e11.name, tool_call_id: e11.id ?? "" });
          }
        }) ?? []);
        return Array.isArray(e10) ? i2 : { messages: i2 };
      }
    }
    function rY(e10) {
      let t10;
      let { llm: r2, tools: i2, messageModifier: n2, stateModifier: s2, checkpointSaver: a2, interruptBefore: o2, interruptAfter: l2, store: c2 } = e10;
      if (t10 = Array.isArray(i2) ? i2 : i2.tools, !("bindTools" in r2) || "function" != typeof r2.bindTools)
        throw Error(`llm ${r2} must define bindTools method.`);
      let u2 = r2.bindTools(t10), h2 = function(e11, t11) {
        if (null != e11 && null != t11)
          throw Error("Expected value for either stateModifier or messageModifier, got values for both");
        return null == e11 && null != t11 && (e11 = function(e12) {
          if ("string" == typeof e12 || (0, rj.QW)(e12) && "system" === e12._getType())
            return e12;
          if ("function" == typeof e12)
            return async (t12) => e12(t12.messages);
          if (g.eq.isRunnable(e12))
            return g.Y8.from((e13) => e13.messages).pipe(e12);
          throw Error(`Unexpected type for messageModifier: ${typeof e12}`);
        }(t11)), function(e12) {
          let t12;
          if (null == e12)
            t12 = g.Y8.from((e13) => e13.messages).withConfig({ runName: "state_modifier" });
          else if ("string" == typeof e12) {
            let r3 = new rj.jN(e12);
            t12 = g.Y8.from((e13) => [r3, ...e13.messages ?? []]).withConfig({ runName: "state_modifier" });
          } else if ((0, rj.QW)(e12) && "system" === e12._getType())
            t12 = g.Y8.from((t13) => [e12, ...t13.messages]).withConfig({ runName: "state_modifier" });
          else if ("function" == typeof e12)
            t12 = g.Y8.from(e12).withConfig({ runName: "state_modifier" });
          else if (g.eq.isRunnable(e12))
            t12 = e12;
          else
            throw Error(`Got unexpected type for 'stateModifier': ${typeof e12}`);
          return t12;
        }(e11);
      }(s2, n2).pipe(u2), d2 = async (e11, t11) => ({ messages: [await h2.invoke(e11, t11)] });
      return new rF(rJ).addNode("agent", d2).addNode("tools", new rQ(t10)).addEdge(rx, "agent").addConditionalEdges("agent", (e11) => {
        let { messages: t11 } = e11, r3 = t11[t11.length - 1];
        return (0, rj.Z0)(r3) && (!r3.tool_calls || 0 === r3.tool_calls.length) ? rN : "continue";
      }, { continue: "tools", [rN]: rN }).addEdge("tools", "agent").compile({ checkpointer: a2, interruptBefore: o2, interruptAfter: l2, store: c2 });
    }
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
