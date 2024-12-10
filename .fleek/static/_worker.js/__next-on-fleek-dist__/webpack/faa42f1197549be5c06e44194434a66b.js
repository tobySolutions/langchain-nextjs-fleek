// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_4843"] = (e, t, r) => {
    r.d(t, { wn: () => e8 });
    var o, a, n, s, i, l, c, u, p, d, f, m, y, h, g = "vercel.ai.error", b = Symbol.for(g), v = class e3 extends Error {
      constructor({ name: e5, message: t2, cause: r2 }) {
        super(t2), this[o] = true, this.name = e5, this.cause = r2;
      }
      static isInstance(t2) {
        return e3.hasMarker(t2, g);
      }
      static hasMarker(e5, t2) {
        let r2 = Symbol.for(t2);
        return null != e5 && "object" == typeof e5 && r2 in e5 && "boolean" == typeof e5[r2] && true === e5[r2];
      }
      toJSON() {
        return { name: this.name, message: this.message };
      }
    };
    o = b;
    var _ = v, x = (Symbol.for("vercel.ai.error.AI_APICallError"), Symbol.for("vercel.ai.error.AI_EmptyResponseBodyError"), "AI_InvalidArgumentError"), I = `vercel.ai.error.${x}`, z = Symbol.for(I), E = class extends _ {
      constructor({ message: e3, cause: t2, argument: r2 }) {
        super({ name: x, message: e3, cause: t2 }), this[a] = true, this.argument = r2;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, I);
      }
    };
    a = z, Symbol.for("vercel.ai.error.AI_InvalidPromptError"), Symbol.for("vercel.ai.error.AI_InvalidResponseDataError"), Symbol.for("vercel.ai.error.AI_JSONParseError"), Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"), Symbol.for("vercel.ai.error.AI_LoadSettingError"), Symbol.for("vercel.ai.error.AI_NoContentGeneratedError");
    var w = "AI_NoSuchModelError", T = `vercel.ai.error.${w}`, S = Symbol.for(T), j = class extends _ {
      constructor({ errorName: e3 = w, modelId: t2, modelType: r2, message: o2 = `No such ${r2}: ${t2}` }) {
        super({ name: e3, message: o2 }), this[n] = true, this.modelId = t2, this.modelType = r2;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, T);
      }
      static isNoSuchModelError(e3) {
        return e3 instanceof Error && e3.name === w && "string" == typeof e3.modelId && "string" == typeof e3.modelType;
      }
      toJSON() {
        return { name: this.name, message: this.message, stack: this.stack, modelId: this.modelId, modelType: this.modelType };
      }
    };
    n = S, Symbol.for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError"), Symbol.for("vercel.ai.error.AI_TypeValidationError");
    var k = "AI_UnsupportedFunctionalityError", A = `vercel.ai.error.${k}`, C = Symbol.for(A), N = class extends _ {
      constructor({ functionality: e3 }) {
        super({ name: k, message: `'${e3}' functionality not supported.` }), this[s] = true, this.functionality = e3;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, A);
      }
      static isUnsupportedFunctionalityError(e3) {
        return e3 instanceof Error && e3.name === k && "string" == typeof e3.functionality;
      }
      toJSON() {
        return { name: this.name, message: this.message, stack: this.stack, functionality: this.functionality };
      }
    };
    function $(e3) {
      return null === e3 || "string" == typeof e3 || "number" == typeof e3 || "boolean" == typeof e3 || (Array.isArray(e3) ? e3.every($) : "object" == typeof e3 && Object.entries(e3).every(([e5, t2]) => "string" == typeof e5 && $(t2)));
    }
    s = C;
    let O = (e3, t2 = 21) => (r2 = t2) => {
      let o2 = "", a2 = 0 | r2;
      for (; a2--; )
        o2 += e3[Math.random() * e3.length | 0];
      return o2;
    };
    r(87);
    var R = ({ prefix: e3, size: t2 = 7, alphabet: r2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: o2 = "-" } = {}) => {
      let a2 = O(r2, t2);
      if (null == e3)
        return a2;
      if (r2.includes(o2))
        throw new E({ argument: "separator", message: `The separator "${o2}" must not be part of the alphabet "${r2}".` });
      return (t3) => `${e3}${o2}${a2(t3)}`;
    };
    R(), Symbol.for("vercel.ai.validator");
    var { btoa: M, atob: F } = globalThis, P = r(5817);
    r(7026);
    var D = { code: "0", name: "text", parse: (e3) => {
      if ("string" != typeof e3)
        throw Error('"text" parts expect a string value.');
      return { type: "text", value: e3 };
    } }, L = { code: "1", name: "function_call", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("function_call" in e3) || "object" != typeof e3.function_call || null == e3.function_call || !("name" in e3.function_call) || !("arguments" in e3.function_call) || "string" != typeof e3.function_call.name || "string" != typeof e3.function_call.arguments)
        throw Error('"function_call" parts expect an object with a "function_call" property.');
      return { type: "function_call", value: e3 };
    } }, J = { code: "2", name: "data", parse: (e3) => {
      if (!Array.isArray(e3))
        throw Error('"data" parts expect an array value.');
      return { type: "data", value: e3 };
    } }, B = { code: "3", name: "error", parse: (e3) => {
      if ("string" != typeof e3)
        throw Error('"error" parts expect a string value.');
      return { type: "error", value: e3 };
    } }, q = { code: "4", name: "assistant_message", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("id" in e3) || !("role" in e3) || !("content" in e3) || "string" != typeof e3.id || "string" != typeof e3.role || "assistant" !== e3.role || !Array.isArray(e3.content) || !e3.content.every((e5) => null != e5 && "object" == typeof e5 && "type" in e5 && "text" === e5.type && "text" in e5 && null != e5.text && "object" == typeof e5.text && "value" in e5.text && "string" == typeof e5.text.value))
        throw Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
      return { type: "assistant_message", value: e3 };
    } }, U = { code: "5", name: "assistant_control_data", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("threadId" in e3) || !("messageId" in e3) || "string" != typeof e3.threadId || "string" != typeof e3.messageId)
        throw Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
      return { type: "assistant_control_data", value: { threadId: e3.threadId, messageId: e3.messageId } };
    } }, V = { code: "6", name: "data_message", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("role" in e3) || !("data" in e3) || "string" != typeof e3.role || "data" !== e3.role)
        throw Error('"data_message" parts expect an object with a "role" and "data" property.');
      return { type: "data_message", value: e3 };
    } }, G = { code: "7", name: "tool_calls", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("tool_calls" in e3) || "object" != typeof e3.tool_calls || null == e3.tool_calls || !Array.isArray(e3.tool_calls) || e3.tool_calls.some((e5) => null == e5 || "object" != typeof e5 || !("id" in e5) || "string" != typeof e5.id || !("type" in e5) || "string" != typeof e5.type || !("function" in e5) || null == e5.function || "object" != typeof e5.function || !("arguments" in e5.function) || "string" != typeof e5.function.name || "string" != typeof e5.function.arguments))
        throw Error('"tool_calls" parts expect an object with a ToolCallPayload.');
      return { type: "tool_calls", value: e3 };
    } }, H = { code: "8", name: "message_annotations", parse: (e3) => {
      if (!Array.isArray(e3))
        throw Error('"message_annotations" parts expect an array value.');
      return { type: "message_annotations", value: e3 };
    } }, K = { code: "9", name: "tool_call", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("toolCallId" in e3) || "string" != typeof e3.toolCallId || !("toolName" in e3) || "string" != typeof e3.toolName || !("args" in e3) || "object" != typeof e3.args)
        throw Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
      return { type: "tool_call", value: e3 };
    } }, X = { code: "a", name: "tool_result", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("toolCallId" in e3) || "string" != typeof e3.toolCallId || !("result" in e3))
        throw Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
      return { type: "tool_result", value: e3 };
    } }, Q = { code: "b", name: "tool_call_streaming_start", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("toolCallId" in e3) || "string" != typeof e3.toolCallId || !("toolName" in e3) || "string" != typeof e3.toolName)
        throw Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
      return { type: "tool_call_streaming_start", value: e3 };
    } }, W = { code: "c", name: "tool_call_delta", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("toolCallId" in e3) || "string" != typeof e3.toolCallId || !("argsTextDelta" in e3) || "string" != typeof e3.argsTextDelta)
        throw Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
      return { type: "tool_call_delta", value: e3 };
    } }, Y = { code: "d", name: "finish_message", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("finishReason" in e3) || "string" != typeof e3.finishReason)
        throw Error('"finish_message" parts expect an object with a "finishReason" property.');
      let t2 = { finishReason: e3.finishReason };
      return "usage" in e3 && null != e3.usage && "object" == typeof e3.usage && "promptTokens" in e3.usage && "completionTokens" in e3.usage && (t2.usage = { promptTokens: "number" == typeof e3.usage.promptTokens ? e3.usage.promptTokens : Number.NaN, completionTokens: "number" == typeof e3.usage.completionTokens ? e3.usage.completionTokens : Number.NaN }), { type: "finish_message", value: t2 };
    } }, Z = { code: "e", name: "finish_step", parse: (e3) => {
      if (null == e3 || "object" != typeof e3 || !("finishReason" in e3) || "string" != typeof e3.finishReason)
        throw Error('"finish_step" parts expect an object with a "finishReason" property.');
      let t2 = { finishReason: e3.finishReason, isContinued: false };
      return "usage" in e3 && null != e3.usage && "object" == typeof e3.usage && "promptTokens" in e3.usage && "completionTokens" in e3.usage && (t2.usage = { promptTokens: "number" == typeof e3.usage.promptTokens ? e3.usage.promptTokens : Number.NaN, completionTokens: "number" == typeof e3.usage.completionTokens ? e3.usage.completionTokens : Number.NaN }), "isContinued" in e3 && "boolean" == typeof e3.isContinued && (t2.isContinued = e3.isContinued), { type: "finish_step", value: t2 };
    } }, ee = [D, L, J, B, q, U, V, G, H, K, X, Q, W, Y, Z], et = { [D.code]: D, [L.code]: L, [J.code]: J, [B.code]: B, [q.code]: q, [U.code]: U, [V.code]: V, [G.code]: G, [H.code]: H, [K.code]: K, [X.code]: X, [Q.code]: Q, [W.code]: W, [Y.code]: Y, [Z.code]: Z };
    D.name, D.code, L.name, L.code, J.name, J.code, B.name, B.code, q.name, q.code, U.name, U.code, V.name, V.code, G.name, G.code, H.name, H.code, K.name, K.code, X.name, X.code, Q.name, Q.code, W.name, W.code, Y.name, Y.code, Z.name, Z.code;
    var er = ee.map((e3) => e3.code), eo = (e3) => {
      let t2 = e3.indexOf(":");
      if (-1 === t2)
        throw Error("Failed to parse stream string. No separator found.");
      let r2 = e3.slice(0, t2);
      if (!er.includes(r2))
        throw Error(`Failed to parse stream string. Invalid code ${r2}.`);
      let o2 = JSON.parse(e3.slice(t2 + 1));
      return et[r2].parse(o2);
    };
    Symbol.for("vercel.ai.schema");
    var ea = Object.defineProperty, en = (e3, t2) => {
      for (var r2 in t2)
        ea(e3, r2, { get: t2[r2], enumerable: true });
    };
    async function es(e3) {
      return void 0 === e3 ? Promise.resolve() : new Promise((t2) => setTimeout(t2, e3));
    }
    var ei = "AI_RetryError", el = `vercel.ai.error.${ei}`, ec = Symbol.for(el), eu = class extends _ {
      constructor({ message: e3, reason: t2, errors: r2 }) {
        super({ name: ei, message: e3 }), this[i] = true, this.reason = t2, this.errors = r2, this.lastError = r2[r2.length - 1];
      }
      static isInstance(e3) {
        return _.hasMarker(e3, el);
      }
      static isRetryError(e3) {
        return e3 instanceof Error && e3.name === ei && "string" == typeof e3.reason && Array.isArray(e3.errors);
      }
      toJSON() {
        return { name: this.name, message: this.message, reason: this.reason, lastError: this.lastError, errors: this.errors };
      }
    };
    i = ec;
    var ep = { spanContext: () => ed, setAttribute() {
      return this;
    }, setAttributes() {
      return this;
    }, addEvent() {
      return this;
    }, addLink() {
      return this;
    }, addLinks() {
      return this;
    }, setStatus() {
      return this;
    }, updateName() {
      return this;
    }, end() {
      return this;
    }, isRecording: () => false, recordException() {
      return this;
    } }, ed = { traceId: "", spanId: "", traceFlags: 0 }, ef = "AI_DownloadError", em = `vercel.ai.error.${ef}`, ey = Symbol.for(em), eh = class extends _ {
      constructor({ url: e3, statusCode: t2, statusText: r2, cause: o2, message: a2 = null == o2 ? `Failed to download ${e3}: ${t2} ${r2}` : `Failed to download ${e3}: ${o2}` }) {
        super({ name: ef, message: a2, cause: o2 }), this[l] = true, this.url = e3, this.statusCode = t2, this.statusText = r2;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, em);
      }
      static isDownloadError(e3) {
        return e3 instanceof Error && e3.name === ef && "string" == typeof e3.url && (null == e3.statusCode || "number" == typeof e3.statusCode) && (null == e3.statusText || "string" == typeof e3.statusText);
      }
      toJSON() {
        return { name: this.name, message: this.message, url: this.url, statusCode: this.statusCode, statusText: this.statusText, cause: this.cause };
      }
    };
    l = ey;
    var eg = "AI_InvalidDataContentError", eb = `vercel.ai.error.${eg}`, ev = Symbol.for(eb), e_ = class extends _ {
      constructor({ content: e3, cause: t2, message: r2 = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e3}.` }) {
        super({ name: eg, message: r2, cause: t2 }), this[c] = true, this.content = e3;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, eb);
      }
      static isInvalidDataContentError(e3) {
        return e3 instanceof Error && e3.name === eg && null != e3.content;
      }
      toJSON() {
        return { name: this.name, message: this.message, stack: this.stack, cause: this.cause, content: this.content };
      }
    };
    c = ev;
    var ex = P.z.union([P.z.string(), P.z.instanceof(Uint8Array), P.z.instanceof(ArrayBuffer), P.z.custom((e3) => {
      var t2, r2;
      return null != (r2 = null == (t2 = globalThis.Buffer) ? void 0 : t2.isBuffer(e3)) && r2;
    }, { message: "Must be a Buffer" })]), eI = "AI_InvalidMessageRoleError", ez = `vercel.ai.error.${eI}`;
    u = Symbol.for(ez);
    var eE = "AI_InvalidArgumentError", ew = `vercel.ai.error.${eE}`;
    p = Symbol.for(ew);
    var eT = P.z.lazy(() => P.z.union([P.z.null(), P.z.string(), P.z.number(), P.z.boolean(), P.z.record(P.z.string(), eT), P.z.array(eT)])), eS = P.z.record(P.z.string(), P.z.record(P.z.string(), eT)), ej = P.z.array(P.z.union([P.z.object({ type: P.z.literal("text"), text: P.z.string() }), P.z.object({ type: P.z.literal("image"), data: P.z.string(), mimeType: P.z.string().optional() })])), ek = P.z.object({ type: P.z.literal("text"), text: P.z.string(), experimental_providerMetadata: eS.optional() }), eA = P.z.object({ type: P.z.literal("image"), image: P.z.union([ex, P.z.instanceof(URL)]), mimeType: P.z.string().optional(), experimental_providerMetadata: eS.optional() }), eC = P.z.object({ type: P.z.literal("file"), data: P.z.union([ex, P.z.instanceof(URL)]), mimeType: P.z.string(), experimental_providerMetadata: eS.optional() }), eN = P.z.object({ type: P.z.literal("tool-call"), toolCallId: P.z.string(), toolName: P.z.string(), args: P.z.unknown() }), e$ = P.z.object({ type: P.z.literal("tool-result"), toolCallId: P.z.string(), toolName: P.z.string(), result: P.z.unknown(), content: ej.optional(), isError: P.z.boolean().optional(), experimental_providerMetadata: eS.optional() }), eO = P.z.object({ role: P.z.literal("system"), content: P.z.string(), experimental_providerMetadata: eS.optional() }), eR = P.z.object({ role: P.z.literal("user"), content: P.z.union([P.z.string(), P.z.array(P.z.union([ek, eA, eC]))]), experimental_providerMetadata: eS.optional() }), eM = P.z.object({ role: P.z.literal("assistant"), content: P.z.union([P.z.string(), P.z.array(P.z.union([ek, eN]))]), experimental_providerMetadata: eS.optional() }), eF = P.z.object({ role: P.z.literal("tool"), content: P.z.array(e$), experimental_providerMetadata: eS.optional() });
    P.z.union([eO, eR, eM, eF]);
    var eP = "AI_MessageConversionError", eD = `vercel.ai.error.${eP}`;
    function eL(e3, { contentType: t2, dataStreamVersion: r2 }) {
      var o2;
      let a2 = new Headers(null != (o2 = null == e3 ? void 0 : e3.headers) ? o2 : {});
      return a2.has("Content-Type") || a2.set("Content-Type", t2), void 0 !== r2 && a2.set("X-Vercel-AI-Data-Stream", r2), a2;
    }
    d = Symbol.for(eD);
    var eJ = "AI_NoObjectGeneratedError", eB = `vercel.ai.error.${eJ}`, eq = Symbol.for(eB), eU = class extends _ {
      constructor({ message: e3 = "No object generated." } = {}) {
        super({ name: eJ, message: e3 }), this[f] = true;
      }
      static isInstance(e3) {
        return _.hasMarker(e3, eB);
      }
      static isNoObjectGeneratedError(e3) {
        return e3 instanceof Error && e3.name === eJ;
      }
      toJSON() {
        return { name: this.name, cause: this.cause, message: this.message, stack: this.stack };
      }
    };
    f = eq;
    R({ prefix: "aiobj", size: 24 });
    R({ prefix: "aiobj", size: 24 });
    var eV = "AI_InvalidToolArgumentsError", eG = `vercel.ai.error.${eV}`;
    m = Symbol.for(eG);
    var eH = "AI_NoSuchToolError", eK = `vercel.ai.error.${eH}`;
    y = Symbol.for(eK);
    function eX(e3, t2) {
      let r2, o2;
      let a2 = e3.getReader(), n2 = t2.getReader(), s2 = false, i2 = false;
      async function l2(e5) {
        try {
          null == r2 && (r2 = a2.read());
          let t3 = await r2;
          r2 = void 0, t3.done ? e5.close() : e5.enqueue(t3.value);
        } catch (t3) {
          e5.error(t3);
        }
      }
      async function c2(e5) {
        try {
          null == o2 && (o2 = n2.read());
          let t3 = await o2;
          o2 = void 0, t3.done ? e5.close() : e5.enqueue(t3.value);
        } catch (t3) {
          e5.error(t3);
        }
      }
      return new ReadableStream({ async pull(e5) {
        try {
          if (s2) {
            await c2(e5);
            return;
          }
          if (i2) {
            await l2(e5);
            return;
          }
          null == r2 && (r2 = a2.read()), null == o2 && (o2 = n2.read());
          let { result: t3, reader: u2 } = await Promise.race([r2.then((e9) => ({ result: e9, reader: a2 })), o2.then((e9) => ({ result: e9, reader: n2 }))]);
          t3.done || e5.enqueue(t3.value), u2 === a2 ? (r2 = void 0, t3.done && (await c2(e5), s2 = true)) : (o2 = void 0, t3.done && (i2 = true, await l2(e5)));
        } catch (t3) {
          e5.error(t3);
        }
      }, cancel() {
        a2.cancel(), n2.cancel();
      } });
    }
    R({ prefix: "aitxt", size: 24 }), R({ prefix: "aitxt", size: 24 });
    var eQ = "AI_NoSuchProviderError", eW = `vercel.ai.error.${eQ}`;
    function eY(e3) {
      let t2 = new TextEncoder(), r2 = "", o2 = e3 || {};
      return new TransformStream({ async start() {
        o2.onStart && await o2.onStart();
      }, async transform(e5, a2) {
        let n2 = "string" == typeof e5 ? e5 : e5.content;
        a2.enqueue(t2.encode(n2)), r2 += n2, o2.onToken && await o2.onToken(n2), o2.onText && "string" == typeof e5 && await o2.onText(e5);
      }, async flush() {
        o2.onCompletion && await o2.onCompletion(r2), !o2.onFinal || "experimental_onFunctionCall" in o2 || await o2.onFinal(r2);
      } });
    }
    h = Symbol.for(eW);
    function eZ() {
      let e3 = new TextEncoder(), t2 = new TextDecoder();
      return new TransformStream({ transform: async (r2, o2) => {
        let a2 = t2.decode(r2);
        o2.enqueue(e3.encode(function(e5, t3) {
          let r3 = ee.find((t4) => t4.name === e5);
          if (!r3)
            throw Error(`Invalid stream part type: ${e5}`);
          return `${r3.code}:${JSON.stringify(t3)}
`;
        }("text", a2)));
      } });
    }
    new TextDecoder("utf-8");
    function e0(e3, t2) {
      return e1(e3, t2);
    }
    function e1(e3, t2) {
      return e3.pipeThrough(new TransformStream({ transform: async (e5, t3) => {
        var r2;
        if ("string" == typeof e5) {
          t3.enqueue(e5);
          return;
        }
        if ("event" in e5) {
          "on_chat_model_stream" === e5.event && e7(null == (r2 = e5.data) ? void 0 : r2.chunk, t3);
          return;
        }
        e7(e5, t3);
      } })).pipeThrough(eY(t2)).pipeThrough(eZ());
    }
    function e2(e3, t2) {
      var r2;
      let o2 = e1(e3, null == t2 ? void 0 : t2.callbacks), a2 = null == t2 ? void 0 : t2.data, n2 = null == t2 ? void 0 : t2.init;
      return new Response(a2 ? eX(a2.stream, o2) : o2, { status: null != (r2 = null == n2 ? void 0 : n2.status) ? r2 : 200, statusText: null == n2 ? void 0 : n2.statusText, headers: eL(n2, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
    }
    function e7(e3, t2) {
      if ("string" == typeof e3.content)
        t2.enqueue(e3.content);
      else
        for (let r2 of e3.content)
          "text" === r2.type && t2.enqueue(r2.text);
    }
    function e6(e3, t2) {
      return function(e5) {
        let t3;
        let r2 = e5[Symbol.asyncIterator](), o2 = (t3 = true, (e9) => (t3 && (e9 = e9.trimStart()) && (t3 = false), e9));
        return new ReadableStream({ async pull(e9) {
          var t4;
          let { value: a2, done: n2 } = await r2.next();
          if (n2) {
            e9.close();
            return;
          }
          let s2 = o2(null != (t4 = a2.delta) ? t4 : "");
          s2 && e9.enqueue(s2);
        } });
      }(e3).pipeThrough(eY(t2)).pipeThrough(eZ());
    }
    function e4(e3, t2 = {}) {
      var r2;
      let { init: o2, data: a2, callbacks: n2 } = t2, s2 = e6(e3, n2);
      return new Response(a2 ? eX(a2.stream, s2) : s2, { status: null != (r2 = null == o2 ? void 0 : o2.status) ? r2 : 200, statusText: null == o2 ? void 0 : o2.statusText, headers: eL(o2, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
    }
    en({}, { toAIStream: () => e0, toDataStream: () => e1, toDataStreamResponse: () => e2 }), en({}, { toDataStream: () => e6, toDataStreamResponse: () => e4 });
    Symbol("internal_openai_fn_messages");
    var e8 = class extends Response {
      constructor(e3, t2, r2) {
        let o2 = e3;
        r2 && (o2 = eX(r2.stream, e3)), super(o2, { ...t2, status: 200, headers: eL(t2, { contentType: "text/plain; charset=utf-8" }) });
      }
    };
  };
  __namedExportsObject["__chunk_87"] = (e, t, r) => {
    var o = r(6195).Buffer;
    let a = void 0 !== o, n = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, s = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    function i(e2, t2, r2) {
      null == r2 && null !== t2 && "object" == typeof t2 && (r2 = t2, t2 = void 0), a && o.isBuffer(e2) && (e2 = e2.toString()), e2 && 65279 === e2.charCodeAt(0) && (e2 = e2.slice(1));
      let i2 = JSON.parse(e2, t2);
      if (null === i2 || "object" != typeof i2)
        return i2;
      let c2 = r2 && r2.protoAction || "error", u = r2 && r2.constructorAction || "error";
      if ("ignore" === c2 && "ignore" === u)
        return i2;
      if ("ignore" !== c2 && "ignore" !== u) {
        if (false === n.test(e2) && false === s.test(e2))
          return i2;
      } else if ("ignore" !== c2 && "ignore" === u) {
        if (false === n.test(e2))
          return i2;
      } else if (false === s.test(e2))
        return i2;
      return l(i2, { protoAction: c2, constructorAction: u, safe: r2 && r2.safe });
    }
    function l(e2, { protoAction: t2 = "error", constructorAction: r2 = "error", safe: o2 } = {}) {
      let a2 = [e2];
      for (; a2.length; ) {
        let e3 = a2;
        for (let n2 of (a2 = [], e3)) {
          if ("ignore" !== t2 && Object.prototype.hasOwnProperty.call(n2, "__proto__")) {
            if (true === o2)
              return null;
            if ("error" === t2)
              throw SyntaxError("Object contains forbidden prototype property");
            delete n2.__proto__;
          }
          if ("ignore" !== r2 && Object.prototype.hasOwnProperty.call(n2, "constructor") && Object.prototype.hasOwnProperty.call(n2.constructor, "prototype")) {
            if (true === o2)
              return null;
            if ("error" === r2)
              throw SyntaxError("Object contains forbidden prototype property");
            delete n2.constructor;
          }
          for (let e4 in n2) {
            let t3 = n2[e4];
            t3 && "object" == typeof t3 && a2.push(t3);
          }
        }
      }
      return e2;
    }
    function c(e2, t2, r2) {
      let o2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      try {
        return i(e2, t2, r2);
      } finally {
        Error.stackTraceLimit = o2;
      }
    }
    e.exports = c, e.exports.default = c, e.exports.parse = c, e.exports.safeParse = function(e2, t2) {
      let r2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      try {
        return i(e2, t2, { safe: true });
      } catch (e3) {
        return null;
      } finally {
        Error.stackTraceLimit = r2;
      }
    }, e.exports.scan = l;
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
