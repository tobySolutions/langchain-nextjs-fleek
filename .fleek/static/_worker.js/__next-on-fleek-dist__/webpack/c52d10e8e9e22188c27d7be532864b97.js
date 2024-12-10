// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_3324"] = (e, t, s) => {
    s.d(t, { BB: () => r.Document, rY: () => r.BaseDocumentTransformer });
    var r = s(860);
  };
  __namedExportsObject["__chunk_1637"] = (e, t, s) => {
    s.d(t, { g: () => a });
    var r = s(6841), i = s(3324), n = s(9966);
    class a extends r.VectorStore {
      _vectorstoreType() {
        return "supabase";
      }
      constructor(e2, t2) {
        super(e2, t2), Object.defineProperty(this, "client", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tableName", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "queryName", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "filter", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "upsertBatchSize", { enumerable: true, configurable: true, writable: true, value: 500 }), this.client = t2.client, this.tableName = t2.tableName || "documents", this.queryName = t2.queryName || "match_documents", this.filter = t2.filter, this.upsertBatchSize = t2.upsertBatchSize ?? this.upsertBatchSize;
      }
      async addDocuments(e2, t2) {
        let s2 = e2.map(({ pageContent: e3 }) => e3);
        return this.addVectors(await this.embeddings.embedDocuments(s2), e2, t2);
      }
      async addVectors(e2, t2, s2) {
        let r2 = e2.map((e3, s3) => ({ content: t2[s3].pageContent, embedding: e3, metadata: t2[s3].metadata })), i2 = [];
        for (let e3 = 0; e3 < r2.length; e3 += this.upsertBatchSize) {
          let t3 = r2.slice(e3, e3 + this.upsertBatchSize).map((t4, r3) => s2?.ids ? { id: s2.ids[e3 + r3], ...t4 } : t4), n2 = await this.client.from(this.tableName).upsert(t3).select();
          if (n2.error)
            throw Error(`Error inserting: ${n2.error.message} ${n2.status} ${n2.statusText}`);
          n2.data && (i2 = i2.concat(n2.data.map((e4) => e4.id)));
        }
        return i2;
      }
      async delete(e2) {
        let { ids: t2 } = e2;
        for (let e3 of t2)
          await this.client.from(this.tableName).delete().eq("id", e3);
      }
      async _searchSupabase(e2, t2, s2) {
        let r2;
        if (s2 && this.filter)
          throw Error("cannot provide both `filter` and `this.filter`");
        let i2 = s2 ?? this.filter ?? {}, n2 = { query_embedding: e2 };
        if ("function" == typeof i2)
          r2 = (e3) => i2(e3).limit(t2);
        else if ("object" == typeof i2)
          n2.filter = i2, n2.match_count = t2, r2 = (e3) => e3;
        else
          throw Error("invalid filter type");
        let a2 = this.client.rpc(this.queryName, n2), { data: o, error: l } = await r2(a2);
        if (l)
          throw Error(`Error searching for documents: ${l.code} ${l.message} ${l.details}`);
        return o;
      }
      async similaritySearchVectorWithScore(e2, t2, s2) {
        return (await this._searchSupabase(e2, t2, s2)).map((e3) => [new i.BB({ metadata: e3.metadata, pageContent: e3.content }), e3.similarity]);
      }
      async maxMarginalRelevanceSearch(e2, t2) {
        let s2 = await this.embeddings.embedQuery(e2), r2 = await this._searchSupabase(s2, t2.fetchK ?? 20, t2.filter), a2 = r2.map((e3) => e3.embedding);
        return (0, n.maximalMarginalRelevance)(s2, a2, t2.lambda, t2.k).map((e3) => new i.BB({ metadata: r2[e3].metadata, pageContent: r2[e3].content }));
      }
      static async fromTexts(e2, t2, s2, r2) {
        let n2 = [];
        for (let s3 = 0; s3 < e2.length; s3 += 1) {
          let r3 = Array.isArray(t2) ? t2[s3] : t2, a2 = new i.BB({ pageContent: e2[s3], metadata: r3 });
          n2.push(a2);
        }
        return a.fromDocuments(n2, s2, r2);
      }
      static async fromDocuments(e2, t2, s2) {
        let r2 = new this(t2, s2);
        return await r2.addDocuments(e2), r2;
      }
      static async fromExistingIndex(e2, t2) {
        return new this(e2, t2);
      }
    }
  };
  __namedExportsObject["__chunk_6700"] = (e) => {
    e.exports = function() {
      throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  };
  __namedExportsObject["__chunk_9972"] = (e, t, s) => {
    s.d(t, { eI: () => tk });
    let r = (e10) => {
      let t2;
      return e10 ? t2 = e10 : "undefined" == typeof fetch ? t2 = (...e11) => Promise.resolve().then(s.bind(s, 3607)).then(({ default: t3 }) => t3(...e11)) : t2 = fetch, (...e11) => t2(...e11);
    };
    class i extends Error {
      constructor(e10, t2 = "FunctionsError", s2) {
        super(e10), this.name = t2, this.context = s2;
      }
    }
    class n extends i {
      constructor(e10) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e10);
      }
    }
    class a extends i {
      constructor(e10) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e10);
      }
    }
    class o extends i {
      constructor(e10) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e10);
      }
    }
    !function(e10) {
      e10.Any = "any", e10.ApNortheast1 = "ap-northeast-1", e10.ApNortheast2 = "ap-northeast-2", e10.ApSouth1 = "ap-south-1", e10.ApSoutheast1 = "ap-southeast-1", e10.ApSoutheast2 = "ap-southeast-2", e10.CaCentral1 = "ca-central-1", e10.EuCentral1 = "eu-central-1", e10.EuWest1 = "eu-west-1", e10.EuWest2 = "eu-west-2", e10.EuWest3 = "eu-west-3", e10.SaEast1 = "sa-east-1", e10.UsEast1 = "us-east-1", e10.UsWest1 = "us-west-1", e10.UsWest2 = "us-west-2";
    }(q || (q = {}));
    class l {
      constructor(e10, { headers: t2 = {}, customFetch: s2, region: i2 = q.Any } = {}) {
        this.url = e10, this.headers = t2, this.region = i2, this.fetch = r(s2);
      }
      setAuth(e10) {
        this.headers.Authorization = `Bearer ${e10}`;
      }
      invoke(e10, t2 = {}) {
        var s2, r2, i2, l2, h2;
        return r2 = this, i2 = void 0, l2 = void 0, h2 = function* () {
          try {
            let r3;
            let { headers: i3, method: l3, body: h3 } = t2, c2 = {}, { region: u2 } = t2;
            u2 || (u2 = this.region), u2 && "any" !== u2 && (c2["x-region"] = u2), h3 && (i3 && !Object.prototype.hasOwnProperty.call(i3, "Content-Type") || !i3) && ("undefined" != typeof Blob && h3 instanceof Blob || h3 instanceof ArrayBuffer ? (c2["Content-Type"] = "application/octet-stream", r3 = h3) : "string" == typeof h3 ? (c2["Content-Type"] = "text/plain", r3 = h3) : "undefined" != typeof FormData && h3 instanceof FormData ? r3 = h3 : (c2["Content-Type"] = "application/json", r3 = JSON.stringify(h3)));
            let d2 = yield this.fetch(`${this.url}/${e10}`, { method: l3 || "POST", headers: Object.assign(Object.assign(Object.assign({}, c2), this.headers), i3), body: r3 }).catch((e11) => {
              throw new n(e11);
            }), f2 = d2.headers.get("x-relay-error");
            if (f2 && "true" === f2)
              throw new a(d2);
            if (!d2.ok)
              throw new o(d2);
            let p2 = (null !== (s2 = d2.headers.get("Content-Type")) && void 0 !== s2 ? s2 : "text/plain").split(";")[0].trim();
            return { data: "application/json" === p2 ? yield d2.json() : "application/octet-stream" === p2 ? yield d2.blob() : "text/event-stream" === p2 ? d2 : "multipart/form-data" === p2 ? yield d2.formData() : yield d2.text(), error: null };
          } catch (e11) {
            return { data: null, error: e11 };
          }
        }, new (l2 || (l2 = Promise))(function(e11, t3) {
          function s3(e12) {
            try {
              a2(h2.next(e12));
            } catch (e13) {
              t3(e13);
            }
          }
          function n2(e12) {
            try {
              a2(h2.throw(e12));
            } catch (e13) {
              t3(e13);
            }
          }
          function a2(t4) {
            var r3;
            t4.done ? e11(t4.value) : ((r3 = t4.value) instanceof l2 ? r3 : new l2(function(e12) {
              e12(r3);
            })).then(s3, n2);
          }
          a2((h2 = h2.apply(r2, i2 || [])).next());
        });
      }
    }
    let { PostgrestClient: h, PostgrestQueryBuilder: c, PostgrestFilterBuilder: u, PostgrestTransformBuilder: d, PostgrestBuilder: f } = s(7483), p = { "X-Client-Info": "realtime-js/2.11.2" };
    !function(e10) {
      e10[e10.connecting = 0] = "connecting", e10[e10.open = 1] = "open", e10[e10.closing = 2] = "closing", e10[e10.closed = 3] = "closed";
    }(z || (z = {})), function(e10) {
      e10.closed = "closed", e10.errored = "errored", e10.joined = "joined", e10.joining = "joining", e10.leaving = "leaving";
    }(J || (J = {})), function(e10) {
      e10.close = "phx_close", e10.error = "phx_error", e10.join = "phx_join", e10.reply = "phx_reply", e10.leave = "phx_leave", e10.access_token = "access_token";
    }(K || (K = {})), (H || (H = {})).websocket = "websocket", function(e10) {
      e10.Connecting = "connecting", e10.Open = "open", e10.Closing = "closing", e10.Closed = "closed";
    }(G || (G = {}));
    class g {
      constructor() {
        this.HEADER_LENGTH = 1;
      }
      decode(e10, t2) {
        return e10.constructor === ArrayBuffer ? t2(this._binaryDecode(e10)) : "string" == typeof e10 ? t2(JSON.parse(e10)) : t2({});
      }
      _binaryDecode(e10) {
        let t2 = new DataView(e10), s2 = new TextDecoder();
        return this._decodeBroadcast(e10, t2, s2);
      }
      _decodeBroadcast(e10, t2, s2) {
        let r2 = t2.getUint8(1), i2 = t2.getUint8(2), n2 = this.HEADER_LENGTH + 2, a2 = s2.decode(e10.slice(n2, n2 + r2));
        n2 += r2;
        let o2 = s2.decode(e10.slice(n2, n2 + i2));
        return n2 += i2, { ref: null, topic: a2, event: o2, payload: JSON.parse(s2.decode(e10.slice(n2, e10.byteLength))) };
      }
    }
    class m {
      constructor(e10, t2) {
        this.callback = e10, this.timerCalc = t2, this.timer = void 0, this.tries = 0, this.callback = e10, this.timerCalc = t2;
      }
      reset() {
        this.tries = 0, clearTimeout(this.timer);
      }
      scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(() => {
          this.tries = this.tries + 1, this.callback();
        }, this.timerCalc(this.tries + 1));
      }
    }
    !function(e10) {
      e10.abstime = "abstime", e10.bool = "bool", e10.date = "date", e10.daterange = "daterange", e10.float4 = "float4", e10.float8 = "float8", e10.int2 = "int2", e10.int4 = "int4", e10.int4range = "int4range", e10.int8 = "int8", e10.int8range = "int8range", e10.json = "json", e10.jsonb = "jsonb", e10.money = "money", e10.numeric = "numeric", e10.oid = "oid", e10.reltime = "reltime", e10.text = "text", e10.time = "time", e10.timestamp = "timestamp", e10.timestamptz = "timestamptz", e10.timetz = "timetz", e10.tsrange = "tsrange", e10.tstzrange = "tstzrange";
    }(W || (W = {}));
    let y = (e10, t2, s2 = {}) => {
      var r2;
      let i2 = null !== (r2 = s2.skipTypes) && void 0 !== r2 ? r2 : [];
      return Object.keys(t2).reduce((s3, r3) => (s3[r3] = v(r3, e10, t2, i2), s3), {});
    }, v = (e10, t2, s2, r2) => {
      let i2 = t2.find((t3) => t3.name === e10), n2 = null == i2 ? void 0 : i2.type, a2 = s2[e10];
      return n2 && !r2.includes(n2) ? w(n2, a2) : _(a2);
    }, w = (e10, t2) => {
      if ("_" === e10.charAt(0))
        return S(t2, e10.slice(1, e10.length));
      switch (e10) {
        case W.bool:
          return b(t2);
        case W.float4:
        case W.float8:
        case W.int2:
        case W.int4:
        case W.int8:
        case W.numeric:
        case W.oid:
          return k(t2);
        case W.json:
        case W.jsonb:
          return T(t2);
        case W.timestamp:
          return j(t2);
        case W.abstime:
        case W.date:
        case W.daterange:
        case W.int4range:
        case W.int8range:
        case W.money:
        case W.reltime:
        case W.text:
        case W.time:
        case W.timestamptz:
        case W.timetz:
        case W.tsrange:
        case W.tstzrange:
        default:
          return _(t2);
      }
    }, _ = (e10) => e10, b = (e10) => {
      switch (e10) {
        case "t":
          return true;
        case "f":
          return false;
        default:
          return e10;
      }
    }, k = (e10) => {
      if ("string" == typeof e10) {
        let t2 = parseFloat(e10);
        if (!Number.isNaN(t2))
          return t2;
      }
      return e10;
    }, T = (e10) => {
      if ("string" == typeof e10)
        try {
          return JSON.parse(e10);
        } catch (e11) {
          console.log(`JSON parse error: ${e11}`);
        }
      return e10;
    }, S = (e10, t2) => {
      if ("string" != typeof e10)
        return e10;
      let s2 = e10.length - 1, r2 = e10[s2];
      if ("{" === e10[0] && "}" === r2) {
        let r3;
        let i2 = e10.slice(1, s2);
        try {
          r3 = JSON.parse("[" + i2 + "]");
        } catch (e11) {
          r3 = i2 ? i2.split(",") : [];
        }
        return r3.map((e11) => w(t2, e11));
      }
      return e10;
    }, j = (e10) => "string" == typeof e10 ? e10.replace(" ", "T") : e10, E = (e10) => {
      let t2 = e10;
      return (t2 = (t2 = t2.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "");
    };
    class O {
      constructor(e10, t2, s2 = {}, r2 = 1e4) {
        this.channel = e10, this.event = t2, this.payload = s2, this.timeout = r2, this.sent = false, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
      }
      resend(e10) {
        this.timeout = e10, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = false, this.send();
      }
      send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload, ref: this.ref, join_ref: this.channel._joinRef() }));
      }
      updatePayload(e10) {
        this.payload = Object.assign(Object.assign({}, this.payload), e10);
      }
      receive(e10, t2) {
        var s2;
        return this._hasReceived(e10) && t2(null === (s2 = this.receivedResp) || void 0 === s2 ? void 0 : s2.response), this.recHooks.push({ status: e10, callback: t2 }), this;
      }
      startTimeout() {
        this.timeoutTimer || (this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref), this.channel._on(this.refEvent, {}, (e10) => {
          this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e10, this._matchReceive(e10);
        }), this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
      }
      trigger(e10, t2) {
        this.refEvent && this.channel._trigger(this.refEvent, { status: e10, response: t2 });
      }
      destroy() {
        this._cancelRefEvent(), this._cancelTimeout();
      }
      _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {});
      }
      _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
      }
      _matchReceive({ status: e10, response: t2 }) {
        this.recHooks.filter((t3) => t3.status === e10).forEach((e11) => e11.callback(t2));
      }
      _hasReceived(e10) {
        return this.receivedResp && this.receivedResp.status === e10;
      }
    }
    !function(e10) {
      e10.SYNC = "sync", e10.JOIN = "join", e10.LEAVE = "leave";
    }(V || (V = {}));
    class P {
      constructor(e10, t2) {
        this.channel = e10, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = { onJoin: () => {
        }, onLeave: () => {
        }, onSync: () => {
        } };
        let s2 = (null == t2 ? void 0 : t2.events) || { state: "presence_state", diff: "presence_diff" };
        this.channel._on(s2.state, {}, (e11) => {
          let { onJoin: t3, onLeave: s3, onSync: r2 } = this.caller;
          this.joinRef = this.channel._joinRef(), this.state = P.syncState(this.state, e11, t3, s3), this.pendingDiffs.forEach((e12) => {
            this.state = P.syncDiff(this.state, e12, t3, s3);
          }), this.pendingDiffs = [], r2();
        }), this.channel._on(s2.diff, {}, (e11) => {
          let { onJoin: t3, onLeave: s3, onSync: r2 } = this.caller;
          this.inPendingSyncState() ? this.pendingDiffs.push(e11) : (this.state = P.syncDiff(this.state, e11, t3, s3), r2());
        }), this.onJoin((e11, t3, s3) => {
          this.channel._trigger("presence", { event: "join", key: e11, currentPresences: t3, newPresences: s3 });
        }), this.onLeave((e11, t3, s3) => {
          this.channel._trigger("presence", { event: "leave", key: e11, currentPresences: t3, leftPresences: s3 });
        }), this.onSync(() => {
          this.channel._trigger("presence", { event: "sync" });
        });
      }
      static syncState(e10, t2, s2, r2) {
        let i2 = this.cloneDeep(e10), n2 = this.transformState(t2), a2 = {}, o2 = {};
        return this.map(i2, (e11, t3) => {
          n2[e11] || (o2[e11] = t3);
        }), this.map(n2, (e11, t3) => {
          let s3 = i2[e11];
          if (s3) {
            let r3 = t3.map((e12) => e12.presence_ref), i3 = s3.map((e12) => e12.presence_ref), n3 = t3.filter((e12) => 0 > i3.indexOf(e12.presence_ref)), l2 = s3.filter((e12) => 0 > r3.indexOf(e12.presence_ref));
            n3.length > 0 && (a2[e11] = n3), l2.length > 0 && (o2[e11] = l2);
          } else
            a2[e11] = t3;
        }), this.syncDiff(i2, { joins: a2, leaves: o2 }, s2, r2);
      }
      static syncDiff(e10, t2, s2, r2) {
        let { joins: i2, leaves: n2 } = { joins: this.transformState(t2.joins), leaves: this.transformState(t2.leaves) };
        return s2 || (s2 = () => {
        }), r2 || (r2 = () => {
        }), this.map(i2, (t3, r3) => {
          var i3;
          let n3 = null !== (i3 = e10[t3]) && void 0 !== i3 ? i3 : [];
          if (e10[t3] = this.cloneDeep(r3), n3.length > 0) {
            let s3 = e10[t3].map((e11) => e11.presence_ref), r4 = n3.filter((e11) => 0 > s3.indexOf(e11.presence_ref));
            e10[t3].unshift(...r4);
          }
          s2(t3, n3, r3);
        }), this.map(n2, (t3, s3) => {
          let i3 = e10[t3];
          if (!i3)
            return;
          let n3 = s3.map((e11) => e11.presence_ref);
          i3 = i3.filter((e11) => 0 > n3.indexOf(e11.presence_ref)), e10[t3] = i3, r2(t3, i3, s3), 0 === i3.length && delete e10[t3];
        }), e10;
      }
      static map(e10, t2) {
        return Object.getOwnPropertyNames(e10).map((s2) => t2(s2, e10[s2]));
      }
      static transformState(e10) {
        return Object.getOwnPropertyNames(e10 = this.cloneDeep(e10)).reduce((t2, s2) => {
          let r2 = e10[s2];
          return "metas" in r2 ? t2[s2] = r2.metas.map((e11) => (e11.presence_ref = e11.phx_ref, delete e11.phx_ref, delete e11.phx_ref_prev, e11)) : t2[s2] = r2, t2;
        }, {});
      }
      static cloneDeep(e10) {
        return JSON.parse(JSON.stringify(e10));
      }
      onJoin(e10) {
        this.caller.onJoin = e10;
      }
      onLeave(e10) {
        this.caller.onLeave = e10;
      }
      onSync(e10) {
        this.caller.onSync = e10;
      }
      inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
      }
    }
    !function(e10) {
      e10.ALL = "*", e10.INSERT = "INSERT", e10.UPDATE = "UPDATE", e10.DELETE = "DELETE";
    }(Y || (Y = {})), function(e10) {
      e10.BROADCAST = "broadcast", e10.PRESENCE = "presence", e10.POSTGRES_CHANGES = "postgres_changes", e10.SYSTEM = "system";
    }(Q || (Q = {})), function(e10) {
      e10.SUBSCRIBED = "SUBSCRIBED", e10.TIMED_OUT = "TIMED_OUT", e10.CLOSED = "CLOSED", e10.CHANNEL_ERROR = "CHANNEL_ERROR";
    }(X || (X = {}));
    class $ {
      constructor(e10, t2 = { config: {} }, s2) {
        this.topic = e10, this.params = t2, this.socket = s2, this.bindings = {}, this.state = J.closed, this.joinedOnce = false, this.pushBuffer = [], this.subTopic = e10.replace(/^realtime:/i, ""), this.params.config = Object.assign({ broadcast: { ack: false, self: false }, presence: { key: "" }, private: false }, t2.config), this.timeout = this.socket.timeout, this.joinPush = new O(this, K.join, this.params, this.timeout), this.rejoinTimer = new m(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
          this.state = J.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e11) => e11.send()), this.pushBuffer = [];
        }), this._onClose(() => {
          this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = J.closed, this.socket._remove(this);
        }), this._onError((e11) => {
          this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e11), this.state = J.errored, this.rejoinTimer.scheduleTimeout());
        }), this.joinPush.receive("timeout", () => {
          this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = J.errored, this.rejoinTimer.scheduleTimeout());
        }), this._on(K.reply, {}, (e11, t3) => {
          this._trigger(this._replyEventName(t3), e11);
        }), this.presence = new P(this), this.broadcastEndpointURL = E(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || false;
      }
      subscribe(e10, t2 = this.timeout) {
        var s2, r2;
        if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
          throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
          let { config: { broadcast: i2, presence: n2, private: a2 } } = this.params;
          this._onError((t3) => null == e10 ? void 0 : e10(X.CHANNEL_ERROR, t3)), this._onClose(() => null == e10 ? void 0 : e10(X.CLOSED));
          let o2 = {}, l2 = { broadcast: i2, presence: n2, postgres_changes: null !== (r2 = null === (s2 = this.bindings.postgres_changes) || void 0 === s2 ? void 0 : s2.map((e11) => e11.filter)) && void 0 !== r2 ? r2 : [], private: a2 };
          this.socket.accessTokenValue && (o2.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: l2 }, o2)), this.joinedOnce = true, this._rejoin(t2), this.joinPush.receive("ok", async ({ postgres_changes: t3 }) => {
            var s3;
            if (this.socket.setAuth(), void 0 === t3) {
              null == e10 || e10(X.SUBSCRIBED);
              return;
            }
            {
              let r3 = this.bindings.postgres_changes, i3 = null !== (s3 = null == r3 ? void 0 : r3.length) && void 0 !== s3 ? s3 : 0, n3 = [];
              for (let s4 = 0; s4 < i3; s4++) {
                let i4 = r3[s4], { filter: { event: a3, schema: o3, table: l3, filter: h2 } } = i4, c2 = t3 && t3[s4];
                if (c2 && c2.event === a3 && c2.schema === o3 && c2.table === l3 && c2.filter === h2)
                  n3.push(Object.assign(Object.assign({}, i4), { id: c2.id }));
                else {
                  this.unsubscribe(), null == e10 || e10(X.CHANNEL_ERROR, Error("mismatch between server and client bindings for postgres changes"));
                  return;
                }
              }
              this.bindings.postgres_changes = n3, e10 && e10(X.SUBSCRIBED);
              return;
            }
          }).receive("error", (t3) => {
            null == e10 || e10(X.CHANNEL_ERROR, Error(JSON.stringify(Object.values(t3).join(", ") || "error")));
          }).receive("timeout", () => {
            null == e10 || e10(X.TIMED_OUT);
          });
        }
        return this;
      }
      presenceState() {
        return this.presence.state;
      }
      async track(e10, t2 = {}) {
        return await this.send({ type: "presence", event: "track", payload: e10 }, t2.timeout || this.timeout);
      }
      async untrack(e10 = {}) {
        return await this.send({ type: "presence", event: "untrack" }, e10);
      }
      on(e10, t2, s2) {
        return this._on(e10, t2, s2);
      }
      async send(e10, t2 = {}) {
        var s2, r2;
        if (this._canPush() || "broadcast" !== e10.type)
          return new Promise((s3) => {
            var r3, i2, n2;
            let a2 = this._push(e10.type, e10, t2.timeout || this.timeout);
            "broadcast" !== e10.type || (null === (n2 = null === (i2 = null === (r3 = this.params) || void 0 === r3 ? void 0 : r3.config) || void 0 === i2 ? void 0 : i2.broadcast) || void 0 === n2 ? void 0 : n2.ack) || s3("ok"), a2.receive("ok", () => s3("ok")), a2.receive("error", () => s3("error")), a2.receive("timeout", () => s3("timed out"));
          });
        {
          let { event: i2, payload: n2 } = e10, a2 = { method: "POST", headers: { Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "", apikey: this.socket.apiKey ? this.socket.apiKey : "", "Content-Type": "application/json" }, body: JSON.stringify({ messages: [{ topic: this.subTopic, event: i2, payload: n2, private: this.private }] }) };
          try {
            let e11 = await this._fetchWithTimeout(this.broadcastEndpointURL, a2, null !== (s2 = t2.timeout) && void 0 !== s2 ? s2 : this.timeout);
            return await (null === (r2 = e11.body) || void 0 === r2 ? void 0 : r2.cancel()), e11.ok ? "ok" : "error";
          } catch (e11) {
            if ("AbortError" === e11.name)
              return "timed out";
            return "error";
          }
        }
      }
      updateJoinPayload(e10) {
        this.joinPush.updatePayload(e10);
      }
      unsubscribe(e10 = this.timeout) {
        this.state = J.leaving;
        let t2 = () => {
          this.socket.log("channel", `leave ${this.topic}`), this._trigger(K.close, "leave", this._joinRef());
        };
        return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((s2) => {
          let r2 = new O(this, K.leave, {}, e10);
          r2.receive("ok", () => {
            t2(), s2("ok");
          }).receive("timeout", () => {
            t2(), s2("timed out");
          }).receive("error", () => {
            s2("error");
          }), r2.send(), this._canPush() || r2.trigger("ok", {});
        });
      }
      async _fetchWithTimeout(e10, t2, s2) {
        let r2 = new AbortController(), i2 = setTimeout(() => r2.abort(), s2), n2 = await this.socket.fetch(e10, Object.assign(Object.assign({}, t2), { signal: r2.signal }));
        return clearTimeout(i2), n2;
      }
      _push(e10, t2, s2 = this.timeout) {
        if (!this.joinedOnce)
          throw `tried to push '${e10}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let r2 = new O(this, e10, t2, s2);
        return this._canPush() ? r2.send() : (r2.startTimeout(), this.pushBuffer.push(r2)), r2;
      }
      _onMessage(e10, t2, s2) {
        return t2;
      }
      _isMember(e10) {
        return this.topic === e10;
      }
      _joinRef() {
        return this.joinPush.ref;
      }
      _trigger(e10, t2, s2) {
        var r2, i2;
        let n2 = e10.toLocaleLowerCase(), { close: a2, error: o2, leave: l2, join: h2 } = K;
        if (s2 && [a2, o2, l2, h2].indexOf(n2) >= 0 && s2 !== this._joinRef())
          return;
        let c2 = this._onMessage(n2, t2, s2);
        if (t2 && !c2)
          throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(n2) ? null === (r2 = this.bindings.postgres_changes) || void 0 === r2 || r2.filter((e11) => {
          var t3, s3, r3;
          return (null === (t3 = e11.filter) || void 0 === t3 ? void 0 : t3.event) === "*" || (null === (r3 = null === (s3 = e11.filter) || void 0 === s3 ? void 0 : s3.event) || void 0 === r3 ? void 0 : r3.toLocaleLowerCase()) === n2;
        }).map((e11) => e11.callback(c2, s2)) : null === (i2 = this.bindings[n2]) || void 0 === i2 || i2.filter((e11) => {
          var s3, r3, i3, a3, o3, l3;
          if (!["broadcast", "presence", "postgres_changes"].includes(n2))
            return e11.type.toLocaleLowerCase() === n2;
          if ("id" in e11) {
            let n3 = e11.id, a4 = null === (s3 = e11.filter) || void 0 === s3 ? void 0 : s3.event;
            return n3 && (null === (r3 = t2.ids) || void 0 === r3 ? void 0 : r3.includes(n3)) && ("*" === a4 || (null == a4 ? void 0 : a4.toLocaleLowerCase()) === (null === (i3 = t2.data) || void 0 === i3 ? void 0 : i3.type.toLocaleLowerCase()));
          }
          {
            let s4 = null === (o3 = null === (a3 = null == e11 ? void 0 : e11.filter) || void 0 === a3 ? void 0 : a3.event) || void 0 === o3 ? void 0 : o3.toLocaleLowerCase();
            return "*" === s4 || s4 === (null === (l3 = null == t2 ? void 0 : t2.event) || void 0 === l3 ? void 0 : l3.toLocaleLowerCase());
          }
        }).map((e11) => {
          if ("object" == typeof c2 && "ids" in c2) {
            let e12 = c2.data, { schema: t3, table: s3, commit_timestamp: r3, type: i3, errors: n3 } = e12;
            c2 = Object.assign(Object.assign({}, { schema: t3, table: s3, commit_timestamp: r3, eventType: i3, new: {}, old: {}, errors: n3 }), this._getPayloadRecords(e12));
          }
          e11.callback(c2, s2);
        });
      }
      _isClosed() {
        return this.state === J.closed;
      }
      _isJoined() {
        return this.state === J.joined;
      }
      _isJoining() {
        return this.state === J.joining;
      }
      _isLeaving() {
        return this.state === J.leaving;
      }
      _replyEventName(e10) {
        return `chan_reply_${e10}`;
      }
      _on(e10, t2, s2) {
        let r2 = e10.toLocaleLowerCase(), i2 = { type: r2, filter: t2, callback: s2 };
        return this.bindings[r2] ? this.bindings[r2].push(i2) : this.bindings[r2] = [i2], this;
      }
      _off(e10, t2) {
        let s2 = e10.toLocaleLowerCase();
        return this.bindings[s2] = this.bindings[s2].filter((e11) => {
          var r2;
          return !((null === (r2 = e11.type) || void 0 === r2 ? void 0 : r2.toLocaleLowerCase()) === s2 && $.isEqual(e11.filter, t2));
        }), this;
      }
      static isEqual(e10, t2) {
        if (Object.keys(e10).length !== Object.keys(t2).length)
          return false;
        for (let s2 in e10)
          if (e10[s2] !== t2[s2])
            return false;
        return true;
      }
      _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
      }
      _onClose(e10) {
        this._on(K.close, {}, e10);
      }
      _onError(e10) {
        this._on(K.error, {}, (t2) => e10(t2));
      }
      _canPush() {
        return this.socket.isConnected() && this._isJoined();
      }
      _rejoin(e10 = this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = J.joining, this.joinPush.resend(e10));
      }
      _getPayloadRecords(e10) {
        let t2 = { new: {}, old: {} };
        return ("INSERT" === e10.type || "UPDATE" === e10.type) && (t2.new = y(e10.columns, e10.record)), ("UPDATE" === e10.type || "DELETE" === e10.type) && (t2.old = y(e10.columns, e10.old_record)), t2;
      }
    }
    let A = () => {
    }, C = "undefined" != typeof WebSocket, R = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
    class x {
      constructor(e10, t2) {
        var r2;
        this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = p, this.params = {}, this.timeout = 1e4, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = A, this.conn = null, this.sendBuffer = [], this.serializer = new g(), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.accessToken = null, this._resolveFetch = (e11) => {
          let t3;
          return e11 ? t3 = e11 : "undefined" == typeof fetch ? t3 = (...e12) => Promise.resolve().then(s.bind(s, 3607)).then(({ default: t4 }) => t4(...e12)) : t3 = fetch, (...e12) => t3(...e12);
        }, this.endPoint = `${e10}/${H.websocket}`, this.httpEndpoint = E(e10), (null == t2 ? void 0 : t2.transport) ? this.transport = t2.transport : this.transport = null, (null == t2 ? void 0 : t2.params) && (this.params = t2.params), (null == t2 ? void 0 : t2.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t2.headers)), (null == t2 ? void 0 : t2.timeout) && (this.timeout = t2.timeout), (null == t2 ? void 0 : t2.logger) && (this.logger = t2.logger), (null == t2 ? void 0 : t2.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t2.heartbeatIntervalMs);
        let i2 = null === (r2 = null == t2 ? void 0 : t2.params) || void 0 === r2 ? void 0 : r2.apikey;
        if (i2 && (this.accessTokenValue = i2, this.apiKey = i2), this.reconnectAfterMs = (null == t2 ? void 0 : t2.reconnectAfterMs) ? t2.reconnectAfterMs : (e11) => [1e3, 2e3, 5e3, 1e4][e11 - 1] || 1e4, this.encode = (null == t2 ? void 0 : t2.encode) ? t2.encode : (e11, t3) => t3(JSON.stringify(e11)), this.decode = (null == t2 ? void 0 : t2.decode) ? t2.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new m(async () => {
          this.disconnect(), this.connect();
        }, this.reconnectAfterMs), this.fetch = this._resolveFetch(null == t2 ? void 0 : t2.fetch), null == t2 ? void 0 : t2.worker) {
          if ("undefined" != typeof window && !window.Worker)
            throw Error("Web Worker is not supported");
          this.worker = (null == t2 ? void 0 : t2.worker) || false, this.workerUrl = null == t2 ? void 0 : t2.workerUrl;
        }
        this.accessToken = (null == t2 ? void 0 : t2.accessToken) || null;
      }
      connect() {
        if (!this.conn) {
          if (this.transport) {
            this.conn = new this.transport(this.endpointURL(), void 0, { headers: this.headers });
            return;
          }
          if (C) {
            this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
            return;
          }
          this.conn = new I(this.endpointURL(), void 0, { close: () => {
            this.conn = null;
          } }), Promise.resolve().then(s.t.bind(s, 6700, 23)).then(({ default: e10 }) => {
            this.conn = new e10(this.endpointURL(), void 0, { headers: this.headers }), this.setupConnection();
          });
        }
      }
      endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: "1.0.0" }));
      }
      disconnect(e10, t2) {
        this.conn && (this.conn.onclose = function() {
        }, e10 ? this.conn.close(e10, null != t2 ? t2 : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
      }
      getChannels() {
        return this.channels;
      }
      async removeChannel(e10) {
        let t2 = await e10.unsubscribe();
        return 0 === this.channels.length && this.disconnect(), t2;
      }
      async removeAllChannels() {
        let e10 = await Promise.all(this.channels.map((e11) => e11.unsubscribe()));
        return this.disconnect(), e10;
      }
      log(e10, t2, s2) {
        this.logger(e10, t2, s2);
      }
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case z.connecting:
            return G.Connecting;
          case z.open:
            return G.Open;
          case z.closing:
            return G.Closing;
          default:
            return G.Closed;
        }
      }
      isConnected() {
        return this.connectionState() === G.Open;
      }
      channel(e10, t2 = { config: {} }) {
        let s2 = new $(`realtime:${e10}`, t2, this);
        return this.channels.push(s2), s2;
      }
      push(e10) {
        let { topic: t2, event: s2, payload: r2, ref: i2 } = e10, n2 = () => {
          this.encode(e10, (e11) => {
            var t3;
            null === (t3 = this.conn) || void 0 === t3 || t3.send(e11);
          });
        };
        this.log("push", `${t2} ${s2} (${i2})`, r2), this.isConnected() ? n2() : this.sendBuffer.push(n2);
      }
      async setAuth(e10 = null) {
        let t2 = e10 || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (t2) {
          let e11 = null;
          try {
            e11 = JSON.parse(atob(t2.split(".")[1]));
          } catch (e12) {
          }
          if (e11 && e11.exp && !(Math.floor(Date.now() / 1e3) - e11.exp < 0))
            return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e11.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e11.exp}`);
          this.accessTokenValue = t2, this.channels.forEach((e12) => {
            t2 && e12.updateJoinPayload({ access_token: t2 }), e12.joinedOnce && e12._isJoined() && e12._push(K.access_token, { access_token: t2 });
          });
        }
      }
      async sendHeartbeat() {
        var e10;
        if (this.isConnected()) {
          if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), null === (e10 = this.conn) || void 0 === e10 || e10.close(1e3, "hearbeat timeout");
            return;
          }
          this.pendingHeartbeatRef = this._makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef }), this.setAuth();
        }
      }
      flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e10) => e10()), this.sendBuffer = []);
      }
      _makeRef() {
        let e10 = this.ref + 1;
        return e10 === this.ref ? this.ref = 0 : this.ref = e10, this.ref.toString();
      }
      _leaveOpenTopic(e10) {
        let t2 = this.channels.find((t3) => t3.topic === e10 && (t3._isJoined() || t3._isJoining()));
        t2 && (this.log("transport", `leaving duplicate topic "${e10}"`), t2.unsubscribe());
      }
      _remove(e10) {
        this.channels = this.channels.filter((t2) => t2._joinRef() !== e10._joinRef());
      }
      setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e10) => this._onConnError(e10), this.conn.onmessage = (e10) => this._onConnMessage(e10), this.conn.onclose = (e10) => this._onConnClose(e10));
      }
      _onConnMessage(e10) {
        this.decode(e10.data, (e11) => {
          let { topic: t2, event: s2, payload: r2, ref: i2 } = e11;
          i2 && i2 === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${r2.status || ""} ${t2} ${s2} ${i2 && "(" + i2 + ")" || ""}`, r2), this.channels.filter((e12) => e12._isMember(t2)).forEach((e12) => e12._trigger(s2, r2, i2)), this.stateChangeCallbacks.message.forEach((t3) => t3(e11));
        });
      }
      async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), this.worker) {
          this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
          let e10 = this._workerObjectUrl(this.workerUrl);
          this.workerRef = new Worker(e10), this.workerRef.onerror = (e11) => {
            this.log("worker", "worker error", e11.message), this.workerRef.terminate();
          }, this.workerRef.onmessage = (e11) => {
            "keepAlive" === e11.data.event && this.sendHeartbeat();
          }, this.workerRef.postMessage({ event: "start", interval: this.heartbeatIntervalMs });
        } else
          this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((e10) => e10());
      }
      _onConnClose(e10) {
        this.log("transport", "close", e10), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t2) => t2(e10));
      }
      _onConnError(e10) {
        this.log("transport", e10.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t2) => t2(e10));
      }
      _triggerChanError() {
        this.channels.forEach((e10) => e10._trigger(K.error));
      }
      _appendParams(e10, t2) {
        if (0 === Object.keys(t2).length)
          return e10;
        let s2 = e10.match(/\?/) ? "&" : "?", r2 = new URLSearchParams(t2);
        return `${e10}${s2}${r2}`;
      }
      _workerObjectUrl(e10) {
        let t2;
        if (e10)
          t2 = e10;
        else {
          let e11 = new Blob([R], { type: "application/javascript" });
          t2 = URL.createObjectURL(e11);
        }
        return t2;
      }
    }
    class I {
      constructor(e10, t2, s2) {
        this.binaryType = "arraybuffer", this.onclose = () => {
        }, this.onerror = () => {
        }, this.onmessage = () => {
        }, this.onopen = () => {
        }, this.readyState = z.connecting, this.send = () => {
        }, this.url = null, this.url = e10, this.close = s2.close;
      }
    }
    class L extends Error {
      constructor(e10) {
        super(e10), this.__isStorageError = true, this.name = "StorageError";
      }
    }
    function U(e10) {
      return "object" == typeof e10 && null !== e10 && "__isStorageError" in e10;
    }
    class D extends L {
      constructor(e10, t2) {
        super(e10), this.name = "StorageApiError", this.status = t2;
      }
      toJSON() {
        return { name: this.name, message: this.message, status: this.status };
      }
    }
    class N extends L {
      constructor(e10, t2) {
        super(e10), this.name = "StorageUnknownError", this.originalError = t2;
      }
    }
    let B = (e10) => {
      let t2;
      return e10 ? t2 = e10 : "undefined" == typeof fetch ? t2 = (...e11) => Promise.resolve().then(s.bind(s, 3607)).then(({ default: t3 }) => t3(...e11)) : t2 = fetch, (...e11) => t2(...e11);
    }, M = () => function(e10, t2, s2, r2) {
      return new (s2 || (s2 = Promise))(function(i2, n2) {
        function a2(e11) {
          try {
            l2(r2.next(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function o2(e11) {
          try {
            l2(r2.throw(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function l2(e11) {
          var t3;
          e11.done ? i2(e11.value) : ((t3 = e11.value) instanceof s2 ? t3 : new s2(function(e12) {
            e12(t3);
          })).then(a2, o2);
        }
        l2((r2 = r2.apply(e10, t2 || [])).next());
      });
    }(void 0, void 0, void 0, function* () {
      return "undefined" == typeof Response ? (yield Promise.resolve().then(s.bind(s, 3607))).Response : Response;
    }), F = (e10) => {
      if (Array.isArray(e10))
        return e10.map((e11) => F(e11));
      if ("function" == typeof e10 || e10 !== Object(e10))
        return e10;
      let t2 = {};
      return Object.entries(e10).forEach(([e11, s2]) => {
        t2[e11.replace(/([-_][a-z])/gi, (e12) => e12.toUpperCase().replace(/[-_]/g, ""))] = F(s2);
      }), t2;
    };
    var q, z, J, K, H, G, W, V, Y, Q, X, Z = function(e10, t2, s2, r2) {
      return new (s2 || (s2 = Promise))(function(i2, n2) {
        function a2(e11) {
          try {
            l2(r2.next(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function o2(e11) {
          try {
            l2(r2.throw(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function l2(e11) {
          var t3;
          e11.done ? i2(e11.value) : ((t3 = e11.value) instanceof s2 ? t3 : new s2(function(e12) {
            e12(t3);
          })).then(a2, o2);
        }
        l2((r2 = r2.apply(e10, t2 || [])).next());
      });
    };
    let ee = (e10) => e10.msg || e10.message || e10.error_description || e10.error || JSON.stringify(e10), et = (e10, t2, s2) => Z(void 0, void 0, void 0, function* () {
      e10 instanceof (yield M()) && !(null == s2 ? void 0 : s2.noResolveJson) ? e10.json().then((s3) => {
        t2(new D(ee(s3), e10.status || 500));
      }).catch((e11) => {
        t2(new N(ee(e11), e11));
      }) : t2(new N(ee(e10), e10));
    }), es = (e10, t2, s2, r2) => {
      let i2 = { method: e10, headers: (null == t2 ? void 0 : t2.headers) || {} };
      return "GET" === e10 ? i2 : (i2.headers = Object.assign({ "Content-Type": "application/json" }, null == t2 ? void 0 : t2.headers), r2 && (i2.body = JSON.stringify(r2)), Object.assign(Object.assign({}, i2), s2));
    };
    function er(e10, t2, s2, r2, i2, n2) {
      return Z(this, void 0, void 0, function* () {
        return new Promise((a2, o2) => {
          e10(s2, es(t2, r2, i2, n2)).then((e11) => {
            if (!e11.ok)
              throw e11;
            return (null == r2 ? void 0 : r2.noResolveJson) ? e11 : e11.json();
          }).then((e11) => a2(e11)).catch((e11) => et(e11, o2, r2));
        });
      });
    }
    function ei(e10, t2, s2, r2) {
      return Z(this, void 0, void 0, function* () {
        return er(e10, "GET", t2, s2, r2);
      });
    }
    function en(e10, t2, s2, r2, i2) {
      return Z(this, void 0, void 0, function* () {
        return er(e10, "POST", t2, r2, i2, s2);
      });
    }
    function ea(e10, t2, s2, r2, i2) {
      return Z(this, void 0, void 0, function* () {
        return er(e10, "DELETE", t2, r2, i2, s2);
      });
    }
    var eo = s(6195).Buffer, el = function(e10, t2, s2, r2) {
      return new (s2 || (s2 = Promise))(function(i2, n2) {
        function a2(e11) {
          try {
            l2(r2.next(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function o2(e11) {
          try {
            l2(r2.throw(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function l2(e11) {
          var t3;
          e11.done ? i2(e11.value) : ((t3 = e11.value) instanceof s2 ? t3 : new s2(function(e12) {
            e12(t3);
          })).then(a2, o2);
        }
        l2((r2 = r2.apply(e10, t2 || [])).next());
      });
    };
    let eh = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } }, ec = { cacheControl: "3600", contentType: "text/plain;charset=UTF-8", upsert: false };
    class eu {
      constructor(e10, t2 = {}, s2, r2) {
        this.url = e10, this.headers = t2, this.bucketId = s2, this.fetch = B(r2);
      }
      uploadOrUpdate(e10, t2, s2, r2) {
        return el(this, void 0, void 0, function* () {
          try {
            let i2;
            let n2 = Object.assign(Object.assign({}, ec), r2), a2 = Object.assign(Object.assign({}, this.headers), "POST" === e10 && { "x-upsert": String(n2.upsert) }), o2 = n2.metadata;
            "undefined" != typeof Blob && s2 instanceof Blob ? ((i2 = new FormData()).append("cacheControl", n2.cacheControl), o2 && i2.append("metadata", this.encodeMetadata(o2)), i2.append("", s2)) : "undefined" != typeof FormData && s2 instanceof FormData ? ((i2 = s2).append("cacheControl", n2.cacheControl), o2 && i2.append("metadata", this.encodeMetadata(o2))) : (i2 = s2, a2["cache-control"] = `max-age=${n2.cacheControl}`, a2["content-type"] = n2.contentType, o2 && (a2["x-metadata"] = this.toBase64(this.encodeMetadata(o2)))), (null == r2 ? void 0 : r2.headers) && (a2 = Object.assign(Object.assign({}, a2), r2.headers));
            let l2 = this._removeEmptyFolders(t2), h2 = this._getFinalPath(l2), c2 = yield this.fetch(`${this.url}/object/${h2}`, Object.assign({ method: e10, body: i2, headers: a2 }, (null == n2 ? void 0 : n2.duplex) ? { duplex: n2.duplex } : {})), u2 = yield c2.json();
            if (c2.ok)
              return { data: { path: l2, id: u2.Id, fullPath: u2.Key }, error: null };
            return { data: null, error: u2 };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      upload(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("POST", e10, t2, s2);
        });
      }
      uploadToSignedUrl(e10, t2, s2, r2) {
        return el(this, void 0, void 0, function* () {
          let i2 = this._removeEmptyFolders(e10), n2 = this._getFinalPath(i2), a2 = new URL(this.url + `/object/upload/sign/${n2}`);
          a2.searchParams.set("token", t2);
          try {
            let e11;
            let t3 = Object.assign({ upsert: ec.upsert }, r2), n3 = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(t3.upsert) });
            "undefined" != typeof Blob && s2 instanceof Blob ? ((e11 = new FormData()).append("cacheControl", t3.cacheControl), e11.append("", s2)) : "undefined" != typeof FormData && s2 instanceof FormData ? (e11 = s2).append("cacheControl", t3.cacheControl) : (e11 = s2, n3["cache-control"] = `max-age=${t3.cacheControl}`, n3["content-type"] = t3.contentType);
            let o2 = yield this.fetch(a2.toString(), { method: "PUT", body: e11, headers: n3 }), l2 = yield o2.json();
            if (o2.ok)
              return { data: { path: i2, fullPath: l2.Key }, error: null };
            return { data: null, error: l2 };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      createSignedUploadUrl(e10, t2) {
        return el(this, void 0, void 0, function* () {
          try {
            let s2 = this._getFinalPath(e10), r2 = Object.assign({}, this.headers);
            (null == t2 ? void 0 : t2.upsert) && (r2["x-upsert"] = "true");
            let i2 = yield en(this.fetch, `${this.url}/object/upload/sign/${s2}`, {}, { headers: r2 }), n2 = new URL(this.url + i2.url), a2 = n2.searchParams.get("token");
            if (!a2)
              throw new L("No token returned by API");
            return { data: { signedUrl: n2.toString(), path: e10, token: a2 }, error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      update(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("PUT", e10, t2, s2);
        });
      }
      move(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          try {
            return { data: yield en(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: e10, destinationKey: t2, destinationBucket: null == s2 ? void 0 : s2.destinationBucket }, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      copy(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          try {
            return { data: { path: (yield en(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: e10, destinationKey: t2, destinationBucket: null == s2 ? void 0 : s2.destinationBucket }, { headers: this.headers })).Key }, error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      createSignedUrl(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          try {
            let r2 = this._getFinalPath(e10), i2 = yield en(this.fetch, `${this.url}/object/sign/${r2}`, Object.assign({ expiresIn: t2 }, (null == s2 ? void 0 : s2.transform) ? { transform: s2.transform } : {}), { headers: this.headers }), n2 = (null == s2 ? void 0 : s2.download) ? `&download=${true === s2.download ? "" : s2.download}` : "";
            return { data: i2 = { signedUrl: encodeURI(`${this.url}${i2.signedURL}${n2}`) }, error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      createSignedUrls(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          try {
            let r2 = yield en(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t2, paths: e10 }, { headers: this.headers }), i2 = (null == s2 ? void 0 : s2.download) ? `&download=${true === s2.download ? "" : s2.download}` : "";
            return { data: r2.map((e11) => Object.assign(Object.assign({}, e11), { signedUrl: e11.signedURL ? encodeURI(`${this.url}${e11.signedURL}${i2}`) : null })), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      download(e10, t2) {
        return el(this, void 0, void 0, function* () {
          let s2 = void 0 !== (null == t2 ? void 0 : t2.transform), r2 = this.transformOptsToQueryString((null == t2 ? void 0 : t2.transform) || {}), i2 = r2 ? `?${r2}` : "";
          try {
            let t3 = this._getFinalPath(e10), r3 = yield ei(this.fetch, `${this.url}/${s2 ? "render/image/authenticated" : "object"}/${t3}${i2}`, { headers: this.headers, noResolveJson: true });
            return { data: yield r3.blob(), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      info(e10) {
        return el(this, void 0, void 0, function* () {
          let t2 = this._getFinalPath(e10);
          try {
            let e11 = yield ei(this.fetch, `${this.url}/object/info/${t2}`, { headers: this.headers });
            return { data: F(e11), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      exists(e10) {
        return el(this, void 0, void 0, function* () {
          let t2 = this._getFinalPath(e10);
          try {
            return yield function(e11, t3, s2, r2) {
              return Z(this, void 0, void 0, function* () {
                return er(e11, "HEAD", t3, Object.assign(Object.assign({}, s2), { noResolveJson: true }), void 0);
              });
            }(this.fetch, `${this.url}/object/${t2}`, { headers: this.headers }), { data: true, error: null };
          } catch (e11) {
            if (U(e11) && e11 instanceof N) {
              let t3 = e11.originalError;
              if ([400, 404].includes(null == t3 ? void 0 : t3.status))
                return { data: false, error: e11 };
            }
            throw e11;
          }
        });
      }
      getPublicUrl(e10, t2) {
        let s2 = this._getFinalPath(e10), r2 = [], i2 = (null == t2 ? void 0 : t2.download) ? `download=${true === t2.download ? "" : t2.download}` : "";
        "" !== i2 && r2.push(i2);
        let n2 = void 0 !== (null == t2 ? void 0 : t2.transform), a2 = this.transformOptsToQueryString((null == t2 ? void 0 : t2.transform) || {});
        "" !== a2 && r2.push(a2);
        let o2 = r2.join("&");
        return "" !== o2 && (o2 = `?${o2}`), { data: { publicUrl: encodeURI(`${this.url}/${n2 ? "render/image" : "object"}/public/${s2}${o2}`) } };
      }
      remove(e10) {
        return el(this, void 0, void 0, function* () {
          try {
            return { data: yield ea(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e10 }, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      list(e10, t2, s2) {
        return el(this, void 0, void 0, function* () {
          try {
            let r2 = Object.assign(Object.assign(Object.assign({}, eh), t2), { prefix: e10 || "" });
            return { data: yield en(this.fetch, `${this.url}/object/list/${this.bucketId}`, r2, { headers: this.headers }, s2), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      encodeMetadata(e10) {
        return JSON.stringify(e10);
      }
      toBase64(e10) {
        return void 0 !== eo ? eo.from(e10).toString("base64") : btoa(e10);
      }
      _getFinalPath(e10) {
        return `${this.bucketId}/${e10}`;
      }
      _removeEmptyFolders(e10) {
        return e10.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
      }
      transformOptsToQueryString(e10) {
        let t2 = [];
        return e10.width && t2.push(`width=${e10.width}`), e10.height && t2.push(`height=${e10.height}`), e10.resize && t2.push(`resize=${e10.resize}`), e10.format && t2.push(`format=${e10.format}`), e10.quality && t2.push(`quality=${e10.quality}`), t2.join("&");
      }
    }
    let ed = { "X-Client-Info": "storage-js/2.7.1" };
    var ef = function(e10, t2, s2, r2) {
      return new (s2 || (s2 = Promise))(function(i2, n2) {
        function a2(e11) {
          try {
            l2(r2.next(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function o2(e11) {
          try {
            l2(r2.throw(e11));
          } catch (e12) {
            n2(e12);
          }
        }
        function l2(e11) {
          var t3;
          e11.done ? i2(e11.value) : ((t3 = e11.value) instanceof s2 ? t3 : new s2(function(e12) {
            e12(t3);
          })).then(a2, o2);
        }
        l2((r2 = r2.apply(e10, t2 || [])).next());
      });
    };
    class ep {
      constructor(e10, t2 = {}, s2) {
        this.url = e10, this.headers = Object.assign(Object.assign({}, ed), t2), this.fetch = B(s2);
      }
      listBuckets() {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield ei(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
          } catch (e10) {
            if (U(e10))
              return { data: null, error: e10 };
            throw e10;
          }
        });
      }
      getBucket(e10) {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield ei(this.fetch, `${this.url}/bucket/${e10}`, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      createBucket(e10, t2 = { public: false }) {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield en(this.fetch, `${this.url}/bucket`, { id: e10, name: e10, public: t2.public, file_size_limit: t2.fileSizeLimit, allowed_mime_types: t2.allowedMimeTypes }, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      updateBucket(e10, t2) {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield function(e11, t3, s2, r2, i2) {
              return Z(this, void 0, void 0, function* () {
                return er(e11, "PUT", t3, r2, void 0, s2);
              });
            }(this.fetch, `${this.url}/bucket/${e10}`, { id: e10, name: e10, public: t2.public, file_size_limit: t2.fileSizeLimit, allowed_mime_types: t2.allowedMimeTypes }, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      emptyBucket(e10) {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield en(this.fetch, `${this.url}/bucket/${e10}/empty`, {}, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      deleteBucket(e10) {
        return ef(this, void 0, void 0, function* () {
          try {
            return { data: yield ea(this.fetch, `${this.url}/bucket/${e10}`, {}, { headers: this.headers }), error: null };
          } catch (e11) {
            if (U(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
    }
    class eg extends ep {
      constructor(e10, t2 = {}, s2) {
        super(e10, t2, s2);
      }
      from(e10) {
        return new eu(this.url, this.headers, e10, this.fetch);
      }
    }
    let em = "";
    "undefined" != typeof Deno ? em = "deno" : "undefined" != typeof document ? em = "web" : "undefined" != typeof navigator && "ReactNative" === navigator.product ? em = "react-native" : em = "node";
    let ey = { headers: { "X-Client-Info": `supabase-js-${em}/2.47.3` } }, ev = { schema: "public" }, ew = { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, flowType: "implicit" }, e_ = {};
    var eb = s(3607);
    let ek = (e10) => {
      let t2;
      return e10 ? t2 = e10 : "undefined" == typeof fetch ? t2 = eb.default : t2 = fetch, (...e11) => t2(...e11);
    }, eT = () => "undefined" == typeof Headers ? eb.Headers : Headers, eS = (e10, t2, s2) => {
      let r2 = ek(s2), i2 = eT();
      return (s3, n2) => function(e11, t3, s4, r3) {
        return new (s4 || (s4 = Promise))(function(i3, n3) {
          function a2(e12) {
            try {
              l2(r3.next(e12));
            } catch (e13) {
              n3(e13);
            }
          }
          function o2(e12) {
            try {
              l2(r3.throw(e12));
            } catch (e13) {
              n3(e13);
            }
          }
          function l2(e12) {
            var t4;
            e12.done ? i3(e12.value) : ((t4 = e12.value) instanceof s4 ? t4 : new s4(function(e13) {
              e13(t4);
            })).then(a2, o2);
          }
          l2((r3 = r3.apply(e11, t3 || [])).next());
        });
      }(void 0, void 0, void 0, function* () {
        var a2;
        let o2 = null !== (a2 = yield t2()) && void 0 !== a2 ? a2 : e10, l2 = new i2(null == n2 ? void 0 : n2.headers);
        return l2.has("apikey") || l2.set("apikey", e10), l2.has("Authorization") || l2.set("Authorization", `Bearer ${o2}`), r2(s3, Object.assign(Object.assign({}, n2), { headers: l2 }));
      });
    }, ej = "2.66.1", eE = { "X-Client-Info": `gotrue-js/${ej}` }, eO = "X-Supabase-Api-Version", eP = { "2024-01-01": { timestamp: Date.parse("2024-01-01T00:00:00.0Z"), name: "2024-01-01" } }, e$ = () => "undefined" != typeof document, eA = { tested: false, writable: false }, eC = () => {
      if (!e$())
        return false;
      try {
        if ("object" != typeof globalThis.localStorage)
          return false;
      } catch (e11) {
        return false;
      }
      if (eA.tested)
        return eA.writable;
      let e10 = `lswt-${Math.random()}${Math.random()}`;
      try {
        globalThis.localStorage.setItem(e10, e10), globalThis.localStorage.removeItem(e10), eA.tested = true, eA.writable = true;
      } catch (e11) {
        eA.tested = true, eA.writable = false;
      }
      return eA.writable;
    };
    function eR(e10) {
      let t2 = {}, s2 = new URL(e10);
      if (s2.hash && "#" === s2.hash[0])
        try {
          new URLSearchParams(s2.hash.substring(1)).forEach((e11, s3) => {
            t2[s3] = e11;
          });
        } catch (e11) {
        }
      return s2.searchParams.forEach((e11, s3) => {
        t2[s3] = e11;
      }), t2;
    }
    let ex = (e10) => {
      let t2;
      return e10 ? t2 = e10 : "undefined" == typeof fetch ? t2 = (...e11) => Promise.resolve().then(s.bind(s, 3607)).then(({ default: t3 }) => t3(...e11)) : t2 = fetch, (...e11) => t2(...e11);
    }, eI = (e10) => "object" == typeof e10 && null !== e10 && "status" in e10 && "ok" in e10 && "json" in e10 && "function" == typeof e10.json, eL = async (e10, t2, s2) => {
      await e10.setItem(t2, JSON.stringify(s2));
    }, eU = async (e10, t2) => {
      let s2 = await e10.getItem(t2);
      if (!s2)
        return null;
      try {
        return JSON.parse(s2);
      } catch (e11) {
        return s2;
      }
    }, eD = async (e10, t2) => {
      await e10.removeItem(t2);
    };
    class eN {
      constructor() {
        this.promise = new eN.promiseConstructor((e10, t2) => {
          this.resolve = e10, this.reject = t2;
        });
      }
    }
    function eB(e10) {
      let t2 = e10.split(".");
      if (3 !== t2.length)
        throw Error("JWT is not valid: not a JWT structure");
      if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t2[1]))
        throw Error("JWT is not valid: payload is not in base64url format");
      return JSON.parse(function(e11) {
        let t3, s2, r2, i2, n2, a2, o2;
        let l2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h2 = "", c2 = 0;
        for (e11 = e11.replace("-", "+").replace("_", "/"); c2 < e11.length; )
          i2 = l2.indexOf(e11.charAt(c2++)), n2 = l2.indexOf(e11.charAt(c2++)), a2 = l2.indexOf(e11.charAt(c2++)), o2 = l2.indexOf(e11.charAt(c2++)), t3 = i2 << 2 | n2 >> 4, s2 = (15 & n2) << 4 | a2 >> 2, r2 = (3 & a2) << 6 | o2, h2 += String.fromCharCode(t3), 64 != a2 && 0 != s2 && (h2 += String.fromCharCode(s2)), 64 != o2 && 0 != r2 && (h2 += String.fromCharCode(r2));
        return h2;
      }(t2[1]));
    }
    async function eM(e10) {
      return await new Promise((t2) => {
        setTimeout(() => t2(null), e10);
      });
    }
    function eF(e10) {
      return ("0" + e10.toString(16)).substr(-2);
    }
    async function eq(e10) {
      let t2 = new TextEncoder().encode(e10);
      return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", t2))).map((e11) => String.fromCharCode(e11)).join("");
    }
    async function ez(e10) {
      return "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder ? btoa(await eq(e10)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e10);
    }
    async function eJ(e10, t2, s2 = false) {
      let r2 = function() {
        let e11 = new Uint32Array(56);
        if ("undefined" == typeof crypto) {
          let e12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", t3 = e12.length, s3 = "";
          for (let r3 = 0; r3 < 56; r3++)
            s3 += e12.charAt(Math.floor(Math.random() * t3));
          return s3;
        }
        return crypto.getRandomValues(e11), Array.from(e11, eF).join("");
      }(), i2 = r2;
      s2 && (i2 += "/PASSWORD_RECOVERY"), await eL(e10, `${t2}-code-verifier`, i2);
      let n2 = await ez(r2), a2 = r2 === n2 ? "plain" : "s256";
      return [n2, a2];
    }
    eN.promiseConstructor = Promise;
    let eK = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
    class eH extends Error {
      constructor(e10, t2, s2) {
        super(e10), this.__isAuthError = true, this.name = "AuthError", this.status = t2, this.code = s2;
      }
    }
    function eG(e10) {
      return "object" == typeof e10 && null !== e10 && "__isAuthError" in e10;
    }
    class eW extends eH {
      constructor(e10, t2, s2) {
        super(e10, t2, s2), this.name = "AuthApiError", this.status = t2, this.code = s2;
      }
    }
    class eV extends eH {
      constructor(e10, t2) {
        super(e10), this.name = "AuthUnknownError", this.originalError = t2;
      }
    }
    class eY extends eH {
      constructor(e10, t2, s2, r2) {
        super(e10, s2, r2), this.name = t2, this.status = s2;
      }
    }
    class eQ extends eY {
      constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
      }
    }
    class eX extends eY {
      constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
      }
    }
    class eZ extends eY {
      constructor(e10) {
        super(e10, "AuthInvalidCredentialsError", 400, void 0);
      }
    }
    class e0 extends eY {
      constructor(e10, t2 = null) {
        super(e10, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t2;
      }
      toJSON() {
        return { name: this.name, message: this.message, status: this.status, details: this.details };
      }
    }
    class e1 extends eY {
      constructor(e10, t2 = null) {
        super(e10, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t2;
      }
      toJSON() {
        return { name: this.name, message: this.message, status: this.status, details: this.details };
      }
    }
    class e4 extends eY {
      constructor(e10, t2) {
        super(e10, "AuthRetryableFetchError", t2, void 0);
      }
    }
    function e2(e10) {
      return eG(e10) && "AuthRetryableFetchError" === e10.name;
    }
    class e3 extends eY {
      constructor(e10, t2, s2) {
        super(e10, "AuthWeakPasswordError", t2, "weak_password"), this.reasons = s2;
      }
    }
    var e6 = function(e10, t2) {
      var s2 = {};
      for (var r2 in e10)
        Object.prototype.hasOwnProperty.call(e10, r2) && 0 > t2.indexOf(r2) && (s2[r2] = e10[r2]);
      if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
        for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e10); i2 < r2.length; i2++)
          0 > t2.indexOf(r2[i2]) && Object.prototype.propertyIsEnumerable.call(e10, r2[i2]) && (s2[r2[i2]] = e10[r2[i2]]);
      return s2;
    };
    let e5 = (e10) => e10.msg || e10.message || e10.error_description || e10.error || JSON.stringify(e10), e8 = [502, 503, 504];
    async function e9(e10) {
      var t2;
      let s2, r2;
      if (!eI(e10))
        throw new e4(e5(e10), 0);
      if (e8.includes(e10.status))
        throw new e4(e5(e10), e10.status);
      try {
        s2 = await e10.json();
      } catch (e11) {
        throw new eV(e5(e11), e11);
      }
      let i2 = function(e11) {
        let t3 = e11.headers.get(eO);
        if (!t3 || !t3.match(eK))
          return null;
        try {
          return new Date(`${t3}T00:00:00.0Z`);
        } catch (e12) {
          return null;
        }
      }(e10);
      if (i2 && i2.getTime() >= eP["2024-01-01"].timestamp && "object" == typeof s2 && s2 && "string" == typeof s2.code ? r2 = s2.code : "object" == typeof s2 && s2 && "string" == typeof s2.error_code && (r2 = s2.error_code), r2) {
        if ("weak_password" === r2)
          throw new e3(e5(s2), e10.status, (null === (t2 = s2.weak_password) || void 0 === t2 ? void 0 : t2.reasons) || []);
        if ("session_not_found" === r2)
          throw new eQ();
      } else if ("object" == typeof s2 && s2 && "object" == typeof s2.weak_password && s2.weak_password && Array.isArray(s2.weak_password.reasons) && s2.weak_password.reasons.length && s2.weak_password.reasons.reduce((e11, t3) => e11 && "string" == typeof t3, true))
        throw new e3(e5(s2), e10.status, s2.weak_password.reasons);
      throw new eW(e5(s2), e10.status || 500, r2);
    }
    let e7 = (e10, t2, s2, r2) => {
      let i2 = { method: e10, headers: (null == t2 ? void 0 : t2.headers) || {} };
      return "GET" === e10 ? i2 : (i2.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, null == t2 ? void 0 : t2.headers), i2.body = JSON.stringify(r2), Object.assign(Object.assign({}, i2), s2));
    };
    async function te(e10, t2, s2, r2) {
      var i2;
      let n2 = Object.assign({}, null == r2 ? void 0 : r2.headers);
      n2[eO] || (n2[eO] = eP["2024-01-01"].name), (null == r2 ? void 0 : r2.jwt) && (n2.Authorization = `Bearer ${r2.jwt}`);
      let a2 = null !== (i2 = null == r2 ? void 0 : r2.query) && void 0 !== i2 ? i2 : {};
      (null == r2 ? void 0 : r2.redirectTo) && (a2.redirect_to = r2.redirectTo);
      let o2 = Object.keys(a2).length ? "?" + new URLSearchParams(a2).toString() : "", l2 = await tt(e10, t2, s2 + o2, { headers: n2, noResolveJson: null == r2 ? void 0 : r2.noResolveJson }, {}, null == r2 ? void 0 : r2.body);
      return (null == r2 ? void 0 : r2.xform) ? null == r2 ? void 0 : r2.xform(l2) : { data: Object.assign({}, l2), error: null };
    }
    async function tt(e10, t2, s2, r2, i2, n2) {
      let a2;
      let o2 = e7(t2, r2, i2, n2);
      try {
        a2 = await e10(s2, Object.assign({}, o2));
      } catch (e11) {
        throw console.error(e11), new e4(e5(e11), 0);
      }
      if (a2.ok || await e9(a2), null == r2 ? void 0 : r2.noResolveJson)
        return a2;
      try {
        return await a2.json();
      } catch (e11) {
        await e9(e11);
      }
    }
    function ts(e10) {
      var t2, s2;
      let r2 = null;
      return e10.access_token && e10.refresh_token && e10.expires_in && (r2 = Object.assign({}, e10), !e10.expires_at) && (r2.expires_at = (s2 = e10.expires_in, Math.round(Date.now() / 1e3) + s2)), { data: { session: r2, user: null !== (t2 = e10.user) && void 0 !== t2 ? t2 : e10 }, error: null };
    }
    function tr(e10) {
      let t2 = ts(e10);
      return !t2.error && e10.weak_password && "object" == typeof e10.weak_password && Array.isArray(e10.weak_password.reasons) && e10.weak_password.reasons.length && e10.weak_password.message && "string" == typeof e10.weak_password.message && e10.weak_password.reasons.reduce((e11, t3) => e11 && "string" == typeof t3, true) && (t2.data.weak_password = e10.weak_password), t2;
    }
    function ti(e10) {
      var t2;
      return { data: { user: null !== (t2 = e10.user) && void 0 !== t2 ? t2 : e10 }, error: null };
    }
    function tn(e10) {
      return { data: e10, error: null };
    }
    function ta(e10) {
      let { action_link: t2, email_otp: s2, hashed_token: r2, redirect_to: i2, verification_type: n2 } = e10;
      return { data: { properties: { action_link: t2, email_otp: s2, hashed_token: r2, redirect_to: i2, verification_type: n2 }, user: Object.assign({}, e6(e10, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])) }, error: null };
    }
    function to(e10) {
      return e10;
    }
    var tl = function(e10, t2) {
      var s2 = {};
      for (var r2 in e10)
        Object.prototype.hasOwnProperty.call(e10, r2) && 0 > t2.indexOf(r2) && (s2[r2] = e10[r2]);
      if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
        for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e10); i2 < r2.length; i2++)
          0 > t2.indexOf(r2[i2]) && Object.prototype.propertyIsEnumerable.call(e10, r2[i2]) && (s2[r2[i2]] = e10[r2[i2]]);
      return s2;
    };
    class th {
      constructor({ url: e10 = "", headers: t2 = {}, fetch: s2 }) {
        this.url = e10, this.headers = t2, this.fetch = ex(s2), this.mfa = { listFactors: this._listFactors.bind(this), deleteFactor: this._deleteFactor.bind(this) };
      }
      async signOut(e10, t2 = "global") {
        try {
          return await te(this.fetch, "POST", `${this.url}/logout?scope=${t2}`, { headers: this.headers, jwt: e10, noResolveJson: true }), { data: null, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async inviteUserByEmail(e10, t2 = {}) {
        try {
          return await te(this.fetch, "POST", `${this.url}/invite`, { body: { email: e10, data: t2.data }, headers: this.headers, redirectTo: t2.redirectTo, xform: ti });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async generateLink(e10) {
        try {
          let { options: t2 } = e10, s2 = tl(e10, ["options"]), r2 = Object.assign(Object.assign({}, s2), t2);
          return "newEmail" in s2 && (r2.new_email = null == s2 ? void 0 : s2.newEmail, delete r2.newEmail), await te(this.fetch, "POST", `${this.url}/admin/generate_link`, { body: r2, headers: this.headers, xform: ta, redirectTo: null == t2 ? void 0 : t2.redirectTo });
        } catch (e11) {
          if (eG(e11))
            return { data: { properties: null, user: null }, error: e11 };
          throw e11;
        }
      }
      async createUser(e10) {
        try {
          return await te(this.fetch, "POST", `${this.url}/admin/users`, { body: e10, headers: this.headers, xform: ti });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async listUsers(e10) {
        var t2, s2, r2, i2, n2, a2, o2;
        try {
          let l2 = { nextPage: null, lastPage: 0, total: 0 }, h2 = await te(this.fetch, "GET", `${this.url}/admin/users`, { headers: this.headers, noResolveJson: true, query: { page: null !== (s2 = null === (t2 = null == e10 ? void 0 : e10.page) || void 0 === t2 ? void 0 : t2.toString()) && void 0 !== s2 ? s2 : "", per_page: null !== (i2 = null === (r2 = null == e10 ? void 0 : e10.perPage) || void 0 === r2 ? void 0 : r2.toString()) && void 0 !== i2 ? i2 : "" }, xform: to });
          if (h2.error)
            throw h2.error;
          let c2 = await h2.json(), u2 = null !== (n2 = h2.headers.get("x-total-count")) && void 0 !== n2 ? n2 : 0, d2 = null !== (o2 = null === (a2 = h2.headers.get("link")) || void 0 === a2 ? void 0 : a2.split(",")) && void 0 !== o2 ? o2 : [];
          return d2.length > 0 && (d2.forEach((e11) => {
            let t3 = parseInt(e11.split(";")[0].split("=")[1].substring(0, 1)), s3 = JSON.parse(e11.split(";")[1].split("=")[1]);
            l2[`${s3}Page`] = t3;
          }), l2.total = parseInt(u2)), { data: Object.assign(Object.assign({}, c2), l2), error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { users: [] }, error: e11 };
          throw e11;
        }
      }
      async getUserById(e10) {
        try {
          return await te(this.fetch, "GET", `${this.url}/admin/users/${e10}`, { headers: this.headers, xform: ti });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async updateUserById(e10, t2) {
        try {
          return await te(this.fetch, "PUT", `${this.url}/admin/users/${e10}`, { body: t2, headers: this.headers, xform: ti });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async deleteUser(e10, t2 = false) {
        try {
          return await te(this.fetch, "DELETE", `${this.url}/admin/users/${e10}`, { headers: this.headers, body: { should_soft_delete: t2 }, xform: ti });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async _listFactors(e10) {
        try {
          let { data: t2, error: s2 } = await te(this.fetch, "GET", `${this.url}/admin/users/${e10.userId}/factors`, { headers: this.headers, xform: (e11) => ({ data: { factors: e11 }, error: null }) });
          return { data: t2, error: s2 };
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async _deleteFactor(e10) {
        try {
          return { data: await te(this.fetch, "DELETE", `${this.url}/admin/users/${e10.userId}/factors/${e10.id}`, { headers: this.headers }), error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
    }
    let tc = { getItem: (e10) => eC() ? globalThis.localStorage.getItem(e10) : null, setItem: (e10, t2) => {
      eC() && globalThis.localStorage.setItem(e10, t2);
    }, removeItem: (e10) => {
      eC() && globalThis.localStorage.removeItem(e10);
    } };
    function tu(e10 = {}) {
      return { getItem: (t2) => e10[t2] || null, setItem: (t2, s2) => {
        e10[t2] = s2;
      }, removeItem: (t2) => {
        delete e10[t2];
      } };
    }
    let td = { debug: !!(globalThis && eC() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")) };
    class tf extends Error {
      constructor(e10) {
        super(e10), this.isAcquireTimeout = true;
      }
    }
    class tp extends tf {
    }
    async function tg(e10, t2, s2) {
      td.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e10, t2);
      let r2 = new globalThis.AbortController();
      return t2 > 0 && setTimeout(() => {
        r2.abort(), td.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e10);
      }, t2), await globalThis.navigator.locks.request(e10, 0 === t2 ? { mode: "exclusive", ifAvailable: true } : { mode: "exclusive", signal: r2.signal }, async (r3) => {
        if (r3) {
          td.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e10, r3.name);
          try {
            return await s2();
          } finally {
            td.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e10, r3.name);
          }
        } else {
          if (0 === t2)
            throw td.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e10), new tp(`Acquiring an exclusive Navigator LockManager lock "${e10}" immediately failed`);
          if (td.debug)
            try {
              let e11 = await globalThis.navigator.locks.query();
              console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e11, null, "  "));
            } catch (e11) {
              console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e11);
            }
          return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await s2();
        }
      });
    }
    !function() {
      if ("object" != typeof globalThis)
        try {
          Object.defineProperty(Object.prototype, "__magic__", { get: function() {
            return this;
          }, configurable: true }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
        } catch (e10) {
          "undefined" != typeof self && (self.globalThis = self);
        }
    }();
    let tm = { url: "http://localhost:9999", storageKey: "supabase.auth.token", autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, headers: eE, flowType: "implicit", debug: false, hasCustomAuthorizationHeader: false };
    async function ty(e10, t2, s2) {
      return await s2();
    }
    class tv {
      constructor(e10) {
        var t2, s2;
        this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = true, this.hasCustomAuthorizationHeader = false, this.suppressGetSessionWarning = false, this.lockAcquired = false, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = tv.nextInstanceID, tv.nextInstanceID += 1, this.instanceID > 0 && e$() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        let r2 = Object.assign(Object.assign({}, tm), e10);
        if (this.logDebugMessages = !!r2.debug, "function" == typeof r2.debug && (this.logger = r2.debug), this.persistSession = r2.persistSession, this.storageKey = r2.storageKey, this.autoRefreshToken = r2.autoRefreshToken, this.admin = new th({ url: r2.url, headers: r2.headers, fetch: r2.fetch }), this.url = r2.url, this.headers = r2.headers, this.fetch = ex(r2.fetch), this.lock = r2.lock || ty, this.detectSessionInUrl = r2.detectSessionInUrl, this.flowType = r2.flowType, this.hasCustomAuthorizationHeader = r2.hasCustomAuthorizationHeader, r2.lock ? this.lock = r2.lock : e$() && (null === (t2 = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t2 ? void 0 : t2.locks) ? this.lock = tg : this.lock = ty, this.mfa = { verify: this._verify.bind(this), enroll: this._enroll.bind(this), unenroll: this._unenroll.bind(this), challenge: this._challenge.bind(this), listFactors: this._listFactors.bind(this), challengeAndVerify: this._challengeAndVerify.bind(this), getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this) }, this.persistSession ? r2.storage ? this.storage = r2.storage : eC() ? this.storage = tc : (this.memoryStorage = {}, this.storage = tu(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = tu(this.memoryStorage)), e$() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
          try {
            this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
          } catch (e11) {
            console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e11);
          }
          null === (s2 = this.broadcastChannel) || void 0 === s2 || s2.addEventListener("message", async (e11) => {
            this._debug("received broadcast notification from other tab or client", e11), await this._notifyAllSubscribers(e11.data.event, e11.data.session, false);
          });
        }
        this.initialize();
      }
      _debug(...e10) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${ej}) ${new Date().toISOString()}`, ...e10), this;
      }
      async initialize() {
        return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()), await this.initializePromise;
      }
      async _initialize() {
        var e10;
        try {
          let t2 = !!e$() && await this._isPKCEFlow();
          if (this._debug("#_initialize()", "begin", "is PKCE flow", t2), t2 || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
            let { data: s2, error: r2 } = await this._getSessionFromURL(t2);
            if (r2) {
              if (this._debug("#_initialize()", "error detecting session from URL", r2), eG(r2) && "AuthImplicitGrantRedirectError" === r2.name) {
                let t3 = null === (e10 = r2.details) || void 0 === e10 ? void 0 : e10.code;
                if ("identity_already_exists" === t3 || "identity_not_found" === t3 || "single_identity_not_deletable" === t3)
                  return { error: r2 };
              }
              return await this._removeSession(), { error: r2 };
            }
            let { session: i2, redirectType: n2 } = s2;
            return this._debug("#_initialize()", "detected session in URL", i2, "redirect type", n2), await this._saveSession(i2), setTimeout(async () => {
              "recovery" === n2 ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i2) : await this._notifyAllSubscribers("SIGNED_IN", i2);
            }, 0), { error: null };
          }
          return await this._recoverAndRefresh(), { error: null };
        } catch (e11) {
          if (eG(e11))
            return { error: e11 };
          return { error: new eV("Unexpected error during initialization", e11) };
        } finally {
          await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
        }
      }
      async signInAnonymously(e10) {
        var t2, s2, r2;
        try {
          let { data: i2, error: n2 } = await te(this.fetch, "POST", `${this.url}/signup`, { headers: this.headers, body: { data: null !== (s2 = null === (t2 = null == e10 ? void 0 : e10.options) || void 0 === t2 ? void 0 : t2.data) && void 0 !== s2 ? s2 : {}, gotrue_meta_security: { captcha_token: null === (r2 = null == e10 ? void 0 : e10.options) || void 0 === r2 ? void 0 : r2.captchaToken } }, xform: ts });
          if (n2 || !i2)
            return { data: { user: null, session: null }, error: n2 };
          let a2 = i2.session, o2 = i2.user;
          return i2.session && (await this._saveSession(i2.session), await this._notifyAllSubscribers("SIGNED_IN", a2)), { data: { user: o2, session: a2 }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async signUp(e10) {
        var t2, s2, r2;
        try {
          let i2;
          if ("email" in e10) {
            let { email: s3, password: r3, options: n3 } = e10, a3 = null, o3 = null;
            "pkce" === this.flowType && ([a3, o3] = await eJ(this.storage, this.storageKey)), i2 = await te(this.fetch, "POST", `${this.url}/signup`, { headers: this.headers, redirectTo: null == n3 ? void 0 : n3.emailRedirectTo, body: { email: s3, password: r3, data: null !== (t2 = null == n3 ? void 0 : n3.data) && void 0 !== t2 ? t2 : {}, gotrue_meta_security: { captcha_token: null == n3 ? void 0 : n3.captchaToken }, code_challenge: a3, code_challenge_method: o3 }, xform: ts });
          } else if ("phone" in e10) {
            let { phone: t3, password: n3, options: a3 } = e10;
            i2 = await te(this.fetch, "POST", `${this.url}/signup`, { headers: this.headers, body: { phone: t3, password: n3, data: null !== (s2 = null == a3 ? void 0 : a3.data) && void 0 !== s2 ? s2 : {}, channel: null !== (r2 = null == a3 ? void 0 : a3.channel) && void 0 !== r2 ? r2 : "sms", gotrue_meta_security: { captcha_token: null == a3 ? void 0 : a3.captchaToken } }, xform: ts });
          } else
            throw new eZ("You must provide either an email or phone number and a password");
          let { data: n2, error: a2 } = i2;
          if (a2 || !n2)
            return { data: { user: null, session: null }, error: a2 };
          let o2 = n2.session, l2 = n2.user;
          return n2.session && (await this._saveSession(n2.session), await this._notifyAllSubscribers("SIGNED_IN", o2)), { data: { user: l2, session: o2 }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async signInWithPassword(e10) {
        try {
          let t2;
          if ("email" in e10) {
            let { email: s3, password: r3, options: i2 } = e10;
            t2 = await te(this.fetch, "POST", `${this.url}/token?grant_type=password`, { headers: this.headers, body: { email: s3, password: r3, gotrue_meta_security: { captcha_token: null == i2 ? void 0 : i2.captchaToken } }, xform: tr });
          } else if ("phone" in e10) {
            let { phone: s3, password: r3, options: i2 } = e10;
            t2 = await te(this.fetch, "POST", `${this.url}/token?grant_type=password`, { headers: this.headers, body: { phone: s3, password: r3, gotrue_meta_security: { captcha_token: null == i2 ? void 0 : i2.captchaToken } }, xform: tr });
          } else
            throw new eZ("You must provide either an email or phone number and a password");
          let { data: s2, error: r2 } = t2;
          if (r2)
            return { data: { user: null, session: null }, error: r2 };
          if (!s2 || !s2.session || !s2.user)
            return { data: { user: null, session: null }, error: new eX() };
          return s2.session && (await this._saveSession(s2.session), await this._notifyAllSubscribers("SIGNED_IN", s2.session)), { data: Object.assign({ user: s2.user, session: s2.session }, s2.weak_password ? { weakPassword: s2.weak_password } : null), error: r2 };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async signInWithOAuth(e10) {
        var t2, s2, r2, i2;
        return await this._handleProviderSignIn(e10.provider, { redirectTo: null === (t2 = e10.options) || void 0 === t2 ? void 0 : t2.redirectTo, scopes: null === (s2 = e10.options) || void 0 === s2 ? void 0 : s2.scopes, queryParams: null === (r2 = e10.options) || void 0 === r2 ? void 0 : r2.queryParams, skipBrowserRedirect: null === (i2 = e10.options) || void 0 === i2 ? void 0 : i2.skipBrowserRedirect });
      }
      async exchangeCodeForSession(e10) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e10));
      }
      async _exchangeCodeForSession(e10) {
        let t2 = await eU(this.storage, `${this.storageKey}-code-verifier`), [s2, r2] = (null != t2 ? t2 : "").split("/");
        try {
          let { data: t3, error: i2 } = await te(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, { headers: this.headers, body: { auth_code: e10, code_verifier: s2 }, xform: ts });
          if (await eD(this.storage, `${this.storageKey}-code-verifier`), i2)
            throw i2;
          if (!t3 || !t3.session || !t3.user)
            return { data: { user: null, session: null, redirectType: null }, error: new eX() };
          return t3.session && (await this._saveSession(t3.session), await this._notifyAllSubscribers("SIGNED_IN", t3.session)), { data: Object.assign(Object.assign({}, t3), { redirectType: null != r2 ? r2 : null }), error: i2 };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null, redirectType: null }, error: e11 };
          throw e11;
        }
      }
      async signInWithIdToken(e10) {
        try {
          let { options: t2, provider: s2, token: r2, access_token: i2, nonce: n2 } = e10, { data: a2, error: o2 } = await te(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, { headers: this.headers, body: { provider: s2, id_token: r2, access_token: i2, nonce: n2, gotrue_meta_security: { captcha_token: null == t2 ? void 0 : t2.captchaToken } }, xform: ts });
          if (o2)
            return { data: { user: null, session: null }, error: o2 };
          if (!a2 || !a2.session || !a2.user)
            return { data: { user: null, session: null }, error: new eX() };
          return a2.session && (await this._saveSession(a2.session), await this._notifyAllSubscribers("SIGNED_IN", a2.session)), { data: a2, error: o2 };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async signInWithOtp(e10) {
        var t2, s2, r2, i2, n2;
        try {
          if ("email" in e10) {
            let { email: r3, options: i3 } = e10, n3 = null, a2 = null;
            "pkce" === this.flowType && ([n3, a2] = await eJ(this.storage, this.storageKey));
            let { error: o2 } = await te(this.fetch, "POST", `${this.url}/otp`, { headers: this.headers, body: { email: r3, data: null !== (t2 = null == i3 ? void 0 : i3.data) && void 0 !== t2 ? t2 : {}, create_user: null === (s2 = null == i3 ? void 0 : i3.shouldCreateUser) || void 0 === s2 || s2, gotrue_meta_security: { captcha_token: null == i3 ? void 0 : i3.captchaToken }, code_challenge: n3, code_challenge_method: a2 }, redirectTo: null == i3 ? void 0 : i3.emailRedirectTo });
            return { data: { user: null, session: null }, error: o2 };
          }
          if ("phone" in e10) {
            let { phone: t3, options: s3 } = e10, { data: a2, error: o2 } = await te(this.fetch, "POST", `${this.url}/otp`, { headers: this.headers, body: { phone: t3, data: null !== (r2 = null == s3 ? void 0 : s3.data) && void 0 !== r2 ? r2 : {}, create_user: null === (i2 = null == s3 ? void 0 : s3.shouldCreateUser) || void 0 === i2 || i2, gotrue_meta_security: { captcha_token: null == s3 ? void 0 : s3.captchaToken }, channel: null !== (n2 = null == s3 ? void 0 : s3.channel) && void 0 !== n2 ? n2 : "sms" } });
            return { data: { user: null, session: null, messageId: null == a2 ? void 0 : a2.message_id }, error: o2 };
          }
          throw new eZ("You must provide either an email or phone number.");
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async verifyOtp(e10) {
        var t2, s2;
        try {
          let r2, i2;
          "options" in e10 && (r2 = null === (t2 = e10.options) || void 0 === t2 ? void 0 : t2.redirectTo, i2 = null === (s2 = e10.options) || void 0 === s2 ? void 0 : s2.captchaToken);
          let { data: n2, error: a2 } = await te(this.fetch, "POST", `${this.url}/verify`, { headers: this.headers, body: Object.assign(Object.assign({}, e10), { gotrue_meta_security: { captcha_token: i2 } }), redirectTo: r2, xform: ts });
          if (a2)
            throw a2;
          if (!n2)
            throw Error("An error occurred on token verification.");
          let o2 = n2.session, l2 = n2.user;
          return (null == o2 ? void 0 : o2.access_token) && (await this._saveSession(o2), await this._notifyAllSubscribers("recovery" == e10.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", o2)), { data: { user: l2, session: o2 }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async signInWithSSO(e10) {
        var t2, s2, r2;
        try {
          let i2 = null, n2 = null;
          return "pkce" === this.flowType && ([i2, n2] = await eJ(this.storage, this.storageKey)), await te(this.fetch, "POST", `${this.url}/sso`, { body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e10 ? { provider_id: e10.providerId } : null), "domain" in e10 ? { domain: e10.domain } : null), { redirect_to: null !== (s2 = null === (t2 = e10.options) || void 0 === t2 ? void 0 : t2.redirectTo) && void 0 !== s2 ? s2 : void 0 }), (null === (r2 = null == e10 ? void 0 : e10.options) || void 0 === r2 ? void 0 : r2.captchaToken) ? { gotrue_meta_security: { captcha_token: e10.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: i2, code_challenge_method: n2 }), headers: this.headers, xform: tn });
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
      }
      async _reauthenticate() {
        try {
          return await this._useSession(async (e10) => {
            let { data: { session: t2 }, error: s2 } = e10;
            if (s2)
              throw s2;
            if (!t2)
              throw new eQ();
            let { error: r2 } = await te(this.fetch, "GET", `${this.url}/reauthenticate`, { headers: this.headers, jwt: t2.access_token });
            return { data: { user: null, session: null }, error: r2 };
          });
        } catch (e10) {
          if (eG(e10))
            return { data: { user: null, session: null }, error: e10 };
          throw e10;
        }
      }
      async resend(e10) {
        try {
          let t2 = `${this.url}/resend`;
          if ("email" in e10) {
            let { email: s2, type: r2, options: i2 } = e10, { error: n2 } = await te(this.fetch, "POST", t2, { headers: this.headers, body: { email: s2, type: r2, gotrue_meta_security: { captcha_token: null == i2 ? void 0 : i2.captchaToken } }, redirectTo: null == i2 ? void 0 : i2.emailRedirectTo });
            return { data: { user: null, session: null }, error: n2 };
          }
          if ("phone" in e10) {
            let { phone: s2, type: r2, options: i2 } = e10, { data: n2, error: a2 } = await te(this.fetch, "POST", t2, { headers: this.headers, body: { phone: s2, type: r2, gotrue_meta_security: { captcha_token: null == i2 ? void 0 : i2.captchaToken } } });
            return { data: { user: null, session: null, messageId: null == n2 ? void 0 : n2.message_id }, error: a2 };
          }
          throw new eZ("You must provide either an email or phone number and a type");
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (e10) => e10));
      }
      async _acquireLock(e10, t2) {
        this._debug("#_acquireLock", "begin", e10);
        try {
          if (this.lockAcquired) {
            let e11 = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), s2 = (async () => (await e11, await t2()))();
            return this.pendingInLock.push((async () => {
              try {
                await s2;
              } catch (e12) {
              }
            })()), s2;
          }
          return await this.lock(`lock:${this.storageKey}`, e10, async () => {
            this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
            try {
              this.lockAcquired = true;
              let e11 = t2();
              for (this.pendingInLock.push((async () => {
                try {
                  await e11;
                } catch (e12) {
                }
              })()), await e11; this.pendingInLock.length; ) {
                let e12 = [...this.pendingInLock];
                await Promise.all(e12), this.pendingInLock.splice(0, e12.length);
              }
              return await e11;
            } finally {
              this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = false;
            }
          });
        } finally {
          this._debug("#_acquireLock", "end");
        }
      }
      async _useSession(e10) {
        this._debug("#_useSession", "begin");
        try {
          let t2 = await this.__loadSession();
          return await e10(t2);
        } finally {
          this._debug("#_useSession", "end");
        }
      }
      async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack);
        try {
          let e10 = null, t2 = await eU(this.storage, this.storageKey);
          if (this._debug("#getSession()", "session from storage", t2), null !== t2 && (this._isValidSession(t2) ? e10 = t2 : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e10)
            return { data: { session: null }, error: null };
          let s2 = !!e10.expires_at && e10.expires_at <= Date.now() / 1e3;
          if (this._debug("#__loadSession()", `session has${s2 ? "" : " not"} expired`, "expires_at", e10.expires_at), !s2) {
            if (this.storage.isServer) {
              let t3 = this.suppressGetSessionWarning;
              e10 = new Proxy(e10, { get: (e11, s3, r3) => (t3 || "user" !== s3 || (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t3 = true, this.suppressGetSessionWarning = true), Reflect.get(e11, s3, r3)) });
            }
            return { data: { session: e10 }, error: null };
          }
          let { session: r2, error: i2 } = await this._callRefreshToken(e10.refresh_token);
          if (i2)
            return { data: { session: null }, error: i2 };
          return { data: { session: r2 }, error: null };
        } finally {
          this._debug("#__loadSession()", "end");
        }
      }
      async getUser(e10) {
        return e10 ? await this._getUser(e10) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
      }
      async _getUser(e10) {
        try {
          if (e10)
            return await te(this.fetch, "GET", `${this.url}/user`, { headers: this.headers, jwt: e10, xform: ti });
          return await this._useSession(async (e11) => {
            var t2, s2, r2;
            let { data: i2, error: n2 } = e11;
            if (n2)
              throw n2;
            return (null === (t2 = i2.session) || void 0 === t2 ? void 0 : t2.access_token) || this.hasCustomAuthorizationHeader ? await te(this.fetch, "GET", `${this.url}/user`, { headers: this.headers, jwt: null !== (r2 = null === (s2 = i2.session) || void 0 === s2 ? void 0 : s2.access_token) && void 0 !== r2 ? r2 : void 0, xform: ti }) : { data: { user: null }, error: new eQ() };
          });
        } catch (e11) {
          if (eG(e11))
            return eG(e11) && "AuthSessionMissingError" === e11.name && (await this._removeSession(), await eD(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      async updateUser(e10, t2 = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e10, t2));
      }
      async _updateUser(e10, t2 = {}) {
        try {
          return await this._useSession(async (s2) => {
            let { data: r2, error: i2 } = s2;
            if (i2)
              throw i2;
            if (!r2.session)
              throw new eQ();
            let n2 = r2.session, a2 = null, o2 = null;
            "pkce" === this.flowType && null != e10.email && ([a2, o2] = await eJ(this.storage, this.storageKey));
            let { data: l2, error: h2 } = await te(this.fetch, "PUT", `${this.url}/user`, { headers: this.headers, redirectTo: null == t2 ? void 0 : t2.emailRedirectTo, body: Object.assign(Object.assign({}, e10), { code_challenge: a2, code_challenge_method: o2 }), jwt: n2.access_token, xform: ti });
            if (h2)
              throw h2;
            return n2.user = l2.user, await this._saveSession(n2), await this._notifyAllSubscribers("USER_UPDATED", n2), { data: { user: n2.user }, error: null };
          });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null }, error: e11 };
          throw e11;
        }
      }
      _decodeJWT(e10) {
        return eB(e10);
      }
      async setSession(e10) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e10));
      }
      async _setSession(e10) {
        try {
          if (!e10.access_token || !e10.refresh_token)
            throw new eQ();
          let t2 = Date.now() / 1e3, s2 = t2, r2 = true, i2 = null, n2 = eB(e10.access_token);
          if (n2.exp && (r2 = (s2 = n2.exp) <= t2), r2) {
            let { session: t3, error: s3 } = await this._callRefreshToken(e10.refresh_token);
            if (s3)
              return { data: { user: null, session: null }, error: s3 };
            if (!t3)
              return { data: { user: null, session: null }, error: null };
            i2 = t3;
          } else {
            let { data: r3, error: n3 } = await this._getUser(e10.access_token);
            if (n3)
              throw n3;
            i2 = { access_token: e10.access_token, refresh_token: e10.refresh_token, user: r3.user, token_type: "bearer", expires_in: s2 - t2, expires_at: s2 }, await this._saveSession(i2), await this._notifyAllSubscribers("SIGNED_IN", i2);
          }
          return { data: { user: i2.user, session: i2 }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { session: null, user: null }, error: e11 };
          throw e11;
        }
      }
      async refreshSession(e10) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e10));
      }
      async _refreshSession(e10) {
        try {
          return await this._useSession(async (t2) => {
            var s2;
            if (!e10) {
              let { data: r3, error: i3 } = t2;
              if (i3)
                throw i3;
              e10 = null !== (s2 = r3.session) && void 0 !== s2 ? s2 : void 0;
            }
            if (!(null == e10 ? void 0 : e10.refresh_token))
              throw new eQ();
            let { session: r2, error: i2 } = await this._callRefreshToken(e10.refresh_token);
            return i2 ? { data: { user: null, session: null }, error: i2 } : r2 ? { data: { user: r2.user, session: r2 }, error: null } : { data: { user: null, session: null }, error: null };
          });
        } catch (e11) {
          if (eG(e11))
            return { data: { user: null, session: null }, error: e11 };
          throw e11;
        }
      }
      async _getSessionFromURL(e10) {
        try {
          if (!e$())
            throw new e0("No browser detected.");
          if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
            if ("pkce" == this.flowType && !e10)
              throw new e1("Not a valid PKCE flow url.");
          } else
            throw new e0("Not a valid implicit grant flow url.");
          let t2 = eR(window.location.href);
          if (e10) {
            if (!t2.code)
              throw new e1("No code detected.");
            let { data: e11, error: s3 } = await this._exchangeCodeForSession(t2.code);
            if (s3)
              throw s3;
            let r3 = new URL(window.location.href);
            return r3.searchParams.delete("code"), window.history.replaceState(window.history.state, "", r3.toString()), { data: { session: e11.session, redirectType: null }, error: null };
          }
          if (t2.error || t2.error_description || t2.error_code)
            throw new e0(t2.error_description || "Error in URL with unspecified error_description", { error: t2.error || "unspecified_error", code: t2.error_code || "unspecified_code" });
          let { provider_token: s2, provider_refresh_token: r2, access_token: i2, refresh_token: n2, expires_in: a2, expires_at: o2, token_type: l2 } = t2;
          if (!i2 || !a2 || !n2 || !l2)
            throw new e0("No session defined in URL");
          let h2 = Math.round(Date.now() / 1e3), c2 = parseInt(a2), u2 = h2 + c2;
          o2 && (u2 = parseInt(o2));
          let d2 = u2 - h2;
          1e3 * d2 <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d2}s, should have been closer to ${c2}s`);
          let f2 = u2 - c2;
          h2 - f2 >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", f2, u2, h2) : h2 - f2 < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", f2, u2, h2);
          let { data: p2, error: g2 } = await this._getUser(i2);
          if (g2)
            throw g2;
          let m2 = { provider_token: s2, provider_refresh_token: r2, access_token: i2, expires_in: c2, expires_at: u2, refresh_token: n2, token_type: l2, user: p2.user };
          return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: m2, redirectType: t2.type }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: { session: null, redirectType: null }, error: e11 };
          throw e11;
        }
      }
      _isImplicitGrantFlow() {
        let e10 = eR(window.location.href);
        return !!(e$() && (e10.access_token || e10.error_description));
      }
      async _isPKCEFlow() {
        let e10 = eR(window.location.href), t2 = await eU(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e10.code && t2);
      }
      async signOut(e10 = { scope: "global" }) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e10));
      }
      async _signOut({ scope: e10 } = { scope: "global" }) {
        return await this._useSession(async (t2) => {
          var s2;
          let { data: r2, error: i2 } = t2;
          if (i2)
            return { error: i2 };
          let n2 = null === (s2 = r2.session) || void 0 === s2 ? void 0 : s2.access_token;
          if (n2) {
            let { error: t3 } = await this.admin.signOut(n2, e10);
            if (t3 && !(eG(t3) && "AuthApiError" === t3.name && (404 === t3.status || 401 === t3.status || 403 === t3.status)))
              return { error: t3 };
          }
          return "others" !== e10 && (await this._removeSession(), await eD(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
        });
      }
      onAuthStateChange(e10) {
        let t2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e11) {
          let t3 = 16 * Math.random() | 0;
          return ("x" == e11 ? t3 : 3 & t3 | 8).toString(16);
        }), s2 = { id: t2, callback: e10, unsubscribe: () => {
          this._debug("#unsubscribe()", "state change callback with id removed", t2), this.stateChangeEmitters.delete(t2);
        } };
        return this._debug("#onAuthStateChange()", "registered callback with id", t2), this.stateChangeEmitters.set(t2, s2), (async () => {
          await this.initializePromise, await this._acquireLock(-1, async () => {
            this._emitInitialSession(t2);
          });
        })(), { data: { subscription: s2 } };
      }
      async _emitInitialSession(e10) {
        return await this._useSession(async (t2) => {
          var s2, r2;
          try {
            let { data: { session: r3 }, error: i2 } = t2;
            if (i2)
              throw i2;
            await (null === (s2 = this.stateChangeEmitters.get(e10)) || void 0 === s2 ? void 0 : s2.callback("INITIAL_SESSION", r3)), this._debug("INITIAL_SESSION", "callback id", e10, "session", r3);
          } catch (t3) {
            await (null === (r2 = this.stateChangeEmitters.get(e10)) || void 0 === r2 ? void 0 : r2.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e10, "error", t3), console.error(t3);
          }
        });
      }
      async resetPasswordForEmail(e10, t2 = {}) {
        let s2 = null, r2 = null;
        "pkce" === this.flowType && ([s2, r2] = await eJ(this.storage, this.storageKey, true));
        try {
          return await te(this.fetch, "POST", `${this.url}/recover`, { body: { email: e10, code_challenge: s2, code_challenge_method: r2, gotrue_meta_security: { captcha_token: t2.captchaToken } }, headers: this.headers, redirectTo: t2.redirectTo });
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async getUserIdentities() {
        var e10;
        try {
          let { data: t2, error: s2 } = await this.getUser();
          if (s2)
            throw s2;
          return { data: { identities: null !== (e10 = t2.user.identities) && void 0 !== e10 ? e10 : [] }, error: null };
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async linkIdentity(e10) {
        var t2;
        try {
          let { data: s2, error: r2 } = await this._useSession(async (t3) => {
            var s3, r3, i2, n2, a2;
            let { data: o2, error: l2 } = t3;
            if (l2)
              throw l2;
            let h2 = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e10.provider, { redirectTo: null === (s3 = e10.options) || void 0 === s3 ? void 0 : s3.redirectTo, scopes: null === (r3 = e10.options) || void 0 === r3 ? void 0 : r3.scopes, queryParams: null === (i2 = e10.options) || void 0 === i2 ? void 0 : i2.queryParams, skipBrowserRedirect: true });
            return await te(this.fetch, "GET", h2, { headers: this.headers, jwt: null !== (a2 = null === (n2 = o2.session) || void 0 === n2 ? void 0 : n2.access_token) && void 0 !== a2 ? a2 : void 0 });
          });
          if (r2)
            throw r2;
          return !e$() || (null === (t2 = e10.options) || void 0 === t2 ? void 0 : t2.skipBrowserRedirect) || window.location.assign(null == s2 ? void 0 : s2.url), { data: { provider: e10.provider, url: null == s2 ? void 0 : s2.url }, error: null };
        } catch (t3) {
          if (eG(t3))
            return { data: { provider: e10.provider, url: null }, error: t3 };
          throw t3;
        }
      }
      async unlinkIdentity(e10) {
        try {
          return await this._useSession(async (t2) => {
            var s2, r2;
            let { data: i2, error: n2 } = t2;
            if (n2)
              throw n2;
            return await te(this.fetch, "DELETE", `${this.url}/user/identities/${e10.identity_id}`, { headers: this.headers, jwt: null !== (r2 = null === (s2 = i2.session) || void 0 === s2 ? void 0 : s2.access_token) && void 0 !== r2 ? r2 : void 0 });
          });
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async _refreshAccessToken(e10) {
        let t2 = `#_refreshAccessToken(${e10.substring(0, 5)}...)`;
        this._debug(t2, "begin");
        try {
          var s2, r2;
          let i2 = Date.now();
          return await (s2 = async (s3) => (s3 > 0 && await eM(200 * Math.pow(2, s3 - 1)), this._debug(t2, "refreshing attempt", s3), await te(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, { body: { refresh_token: e10 }, headers: this.headers, xform: ts })), r2 = (e11, t3) => t3 && e2(t3) && Date.now() + 200 * Math.pow(2, e11) - i2 < 3e4, new Promise((e11, t3) => {
            (async () => {
              for (let i3 = 0; i3 < 1 / 0; i3++)
                try {
                  let t4 = await s2(i3);
                  if (!r2(i3, null, t4)) {
                    e11(t4);
                    return;
                  }
                } catch (e12) {
                  if (!r2(i3, e12)) {
                    t3(e12);
                    return;
                  }
                }
            })();
          }));
        } catch (e11) {
          if (this._debug(t2, "error", e11), eG(e11))
            return { data: { session: null, user: null }, error: e11 };
          throw e11;
        } finally {
          this._debug(t2, "end");
        }
      }
      _isValidSession(e10) {
        return "object" == typeof e10 && null !== e10 && "access_token" in e10 && "refresh_token" in e10 && "expires_at" in e10;
      }
      async _handleProviderSignIn(e10, t2) {
        let s2 = await this._getUrlForProvider(`${this.url}/authorize`, e10, { redirectTo: t2.redirectTo, scopes: t2.scopes, queryParams: t2.queryParams });
        return this._debug("#_handleProviderSignIn()", "provider", e10, "options", t2, "url", s2), e$() && !t2.skipBrowserRedirect && window.location.assign(s2), { data: { provider: e10, url: s2 }, error: null };
      }
      async _recoverAndRefresh() {
        var e10;
        let t2 = "#_recoverAndRefresh()";
        this._debug(t2, "begin");
        try {
          let s2 = await eU(this.storage, this.storageKey);
          if (this._debug(t2, "session from storage", s2), !this._isValidSession(s2)) {
            this._debug(t2, "session is not valid"), null !== s2 && await this._removeSession();
            return;
          }
          let r2 = Math.round(Date.now() / 1e3), i2 = (null !== (e10 = s2.expires_at) && void 0 !== e10 ? e10 : 1 / 0) < r2 + 10;
          if (this._debug(t2, `session has${i2 ? "" : " not"} expired with margin of 10s`), i2) {
            if (this.autoRefreshToken && s2.refresh_token) {
              let { error: e11 } = await this._callRefreshToken(s2.refresh_token);
              e11 && (console.error(e11), e2(e11) || (this._debug(t2, "refresh failed with a non-retryable error, removing the session", e11), await this._removeSession()));
            }
          } else
            await this._notifyAllSubscribers("SIGNED_IN", s2);
        } catch (e11) {
          this._debug(t2, "error", e11), console.error(e11);
          return;
        } finally {
          this._debug(t2, "end");
        }
      }
      async _callRefreshToken(e10) {
        var t2, s2;
        if (!e10)
          throw new eQ();
        if (this.refreshingDeferred)
          return this.refreshingDeferred.promise;
        let r2 = `#_callRefreshToken(${e10.substring(0, 5)}...)`;
        this._debug(r2, "begin");
        try {
          this.refreshingDeferred = new eN();
          let { data: t3, error: s3 } = await this._refreshAccessToken(e10);
          if (s3)
            throw s3;
          if (!t3.session)
            throw new eQ();
          await this._saveSession(t3.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t3.session);
          let r3 = { session: t3.session, error: null };
          return this.refreshingDeferred.resolve(r3), r3;
        } catch (e11) {
          if (this._debug(r2, "error", e11), eG(e11)) {
            let s3 = { session: null, error: e11 };
            return e2(e11) || await this._removeSession(), null === (t2 = this.refreshingDeferred) || void 0 === t2 || t2.resolve(s3), s3;
          }
          throw null === (s2 = this.refreshingDeferred) || void 0 === s2 || s2.reject(e11), e11;
        } finally {
          this.refreshingDeferred = null, this._debug(r2, "end");
        }
      }
      async _notifyAllSubscribers(e10, t2, s2 = true) {
        let r2 = `#_notifyAllSubscribers(${e10})`;
        this._debug(r2, "begin", t2, `broadcast = ${s2}`);
        try {
          this.broadcastChannel && s2 && this.broadcastChannel.postMessage({ event: e10, session: t2 });
          let r3 = [], i2 = Array.from(this.stateChangeEmitters.values()).map(async (s3) => {
            try {
              await s3.callback(e10, t2);
            } catch (e11) {
              r3.push(e11);
            }
          });
          if (await Promise.all(i2), r3.length > 0) {
            for (let e11 = 0; e11 < r3.length; e11 += 1)
              console.error(r3[e11]);
            throw r3[0];
          }
        } finally {
          this._debug(r2, "end");
        }
      }
      async _saveSession(e10) {
        this._debug("#_saveSession()", e10), this.suppressGetSessionWarning = true, await eL(this.storage, this.storageKey, e10);
      }
      async _removeSession() {
        this._debug("#_removeSession()"), await eD(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
      }
      _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        let e10 = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
          e10 && e$() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e10);
        } catch (e11) {
          console.error("removing visibilitychange callback failed", e11);
        }
      }
      async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        let e10 = setInterval(() => this._autoRefreshTokenTick(), 3e4);
        this.autoRefreshTicker = e10, e10 && "object" == typeof e10 && "function" == typeof e10.unref ? e10.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e10), setTimeout(async () => {
          await this.initializePromise, await this._autoRefreshTokenTick();
        }, 0);
      }
      async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        let e10 = this.autoRefreshTicker;
        this.autoRefreshTicker = null, e10 && clearInterval(e10);
      }
      async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
      }
      async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
      }
      async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
          await this._acquireLock(0, async () => {
            try {
              let e10 = Date.now();
              try {
                return await this._useSession(async (t2) => {
                  let { data: { session: s2 } } = t2;
                  if (!s2 || !s2.refresh_token || !s2.expires_at) {
                    this._debug("#_autoRefreshTokenTick()", "no session");
                    return;
                  }
                  let r2 = Math.floor((1e3 * s2.expires_at - e10) / 3e4);
                  this._debug("#_autoRefreshTokenTick()", `access token expires in ${r2} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`), r2 <= 3 && await this._callRefreshToken(s2.refresh_token);
                });
              } catch (e11) {
                console.error("Auto refresh tick failed with error. This is likely a transient error.", e11);
              }
            } finally {
              this._debug("#_autoRefreshTokenTick()", "end");
            }
          });
        } catch (e10) {
          if (e10.isAcquireTimeout || e10 instanceof tf)
            this._debug("auto refresh token tick lock not available");
          else
            throw e10;
        }
      }
      async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !e$() || !(null == window ? void 0 : window.addEventListener))
          return this.autoRefreshToken && this.startAutoRefresh(), false;
        try {
          this.visibilityChangedCallback = async () => await this._onVisibilityChanged(false), null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(true);
        } catch (e10) {
          console.error("_handleVisibilityChange", e10);
        }
      }
      async _onVisibilityChanged(e10) {
        let t2 = `#_onVisibilityChanged(${e10})`;
        this._debug(t2, "visibilityState", document.visibilityState), "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(), e10 || (await this.initializePromise, await this._acquireLock(-1, async () => {
          if ("visible" !== document.visibilityState) {
            this._debug(t2, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
            return;
          }
          await this._recoverAndRefresh();
        }))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh();
      }
      async _getUrlForProvider(e10, t2, s2) {
        let r2 = [`provider=${encodeURIComponent(t2)}`];
        if ((null == s2 ? void 0 : s2.redirectTo) && r2.push(`redirect_to=${encodeURIComponent(s2.redirectTo)}`), (null == s2 ? void 0 : s2.scopes) && r2.push(`scopes=${encodeURIComponent(s2.scopes)}`), "pkce" === this.flowType) {
          let [e11, t3] = await eJ(this.storage, this.storageKey), s3 = new URLSearchParams({ code_challenge: `${encodeURIComponent(e11)}`, code_challenge_method: `${encodeURIComponent(t3)}` });
          r2.push(s3.toString());
        }
        if (null == s2 ? void 0 : s2.queryParams) {
          let e11 = new URLSearchParams(s2.queryParams);
          r2.push(e11.toString());
        }
        return (null == s2 ? void 0 : s2.skipBrowserRedirect) && r2.push(`skip_http_redirect=${s2.skipBrowserRedirect}`), `${e10}?${r2.join("&")}`;
      }
      async _unenroll(e10) {
        try {
          return await this._useSession(async (t2) => {
            var s2;
            let { data: r2, error: i2 } = t2;
            return i2 ? { data: null, error: i2 } : await te(this.fetch, "DELETE", `${this.url}/factors/${e10.factorId}`, { headers: this.headers, jwt: null === (s2 = null == r2 ? void 0 : r2.session) || void 0 === s2 ? void 0 : s2.access_token });
          });
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async _enroll(e10) {
        try {
          return await this._useSession(async (t2) => {
            var s2, r2;
            let { data: i2, error: n2 } = t2;
            if (n2)
              return { data: null, error: n2 };
            let a2 = Object.assign({ friendly_name: e10.friendlyName, factor_type: e10.factorType }, "phone" === e10.factorType ? { phone: e10.phone } : { issuer: e10.issuer }), { data: o2, error: l2 } = await te(this.fetch, "POST", `${this.url}/factors`, { body: a2, headers: this.headers, jwt: null === (s2 = null == i2 ? void 0 : i2.session) || void 0 === s2 ? void 0 : s2.access_token });
            return l2 ? { data: null, error: l2 } : ("totp" === e10.factorType && (null === (r2 = null == o2 ? void 0 : o2.totp) || void 0 === r2 ? void 0 : r2.qr_code) && (o2.totp.qr_code = `data:image/svg+xml;utf-8,${o2.totp.qr_code}`), { data: o2, error: null });
          });
        } catch (e11) {
          if (eG(e11))
            return { data: null, error: e11 };
          throw e11;
        }
      }
      async _verify(e10) {
        return this._acquireLock(-1, async () => {
          try {
            return await this._useSession(async (t2) => {
              var s2;
              let { data: r2, error: i2 } = t2;
              if (i2)
                return { data: null, error: i2 };
              let { data: n2, error: a2 } = await te(this.fetch, "POST", `${this.url}/factors/${e10.factorId}/verify`, { body: { code: e10.code, challenge_id: e10.challengeId }, headers: this.headers, jwt: null === (s2 = null == r2 ? void 0 : r2.session) || void 0 === s2 ? void 0 : s2.access_token });
              return a2 ? { data: null, error: a2 } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + n2.expires_in }, n2)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", n2), { data: n2, error: a2 });
            });
          } catch (e11) {
            if (eG(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      async _challenge(e10) {
        return this._acquireLock(-1, async () => {
          try {
            return await this._useSession(async (t2) => {
              var s2;
              let { data: r2, error: i2 } = t2;
              return i2 ? { data: null, error: i2 } : await te(this.fetch, "POST", `${this.url}/factors/${e10.factorId}/challenge`, { body: { channel: e10.channel }, headers: this.headers, jwt: null === (s2 = null == r2 ? void 0 : r2.session) || void 0 === s2 ? void 0 : s2.access_token });
            });
          } catch (e11) {
            if (eG(e11))
              return { data: null, error: e11 };
            throw e11;
          }
        });
      }
      async _challengeAndVerify(e10) {
        let { data: t2, error: s2 } = await this._challenge({ factorId: e10.factorId });
        return s2 ? { data: null, error: s2 } : await this._verify({ factorId: e10.factorId, challengeId: t2.id, code: e10.code });
      }
      async _listFactors() {
        let { data: { user: e10 }, error: t2 } = await this.getUser();
        if (t2)
          return { data: null, error: t2 };
        let s2 = (null == e10 ? void 0 : e10.factors) || [], r2 = s2.filter((e11) => "totp" === e11.factor_type && "verified" === e11.status), i2 = s2.filter((e11) => "phone" === e11.factor_type && "verified" === e11.status);
        return { data: { all: s2, totp: r2, phone: i2 }, error: null };
      }
      async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async (e10) => {
          var t2, s2;
          let { data: { session: r2 }, error: i2 } = e10;
          if (i2)
            return { data: null, error: i2 };
          if (!r2)
            return { data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] }, error: null };
          let n2 = this._decodeJWT(r2.access_token), a2 = null;
          n2.aal && (a2 = n2.aal);
          let o2 = a2;
          return (null !== (s2 = null === (t2 = r2.user.factors) || void 0 === t2 ? void 0 : t2.filter((e11) => "verified" === e11.status)) && void 0 !== s2 ? s2 : []).length > 0 && (o2 = "aal2"), { data: { currentLevel: a2, nextLevel: o2, currentAuthenticationMethods: n2.amr || [] }, error: null };
        }));
      }
    }
    tv.nextInstanceID = 0;
    let tw = tv;
    class t_ extends tw {
      constructor(e10) {
        super(e10);
      }
    }
    class tb {
      constructor(e10, t2, s2) {
        var r2, i2, n2;
        if (this.supabaseUrl = e10, this.supabaseKey = t2, !e10)
          throw Error("supabaseUrl is required.");
        if (!t2)
          throw Error("supabaseKey is required.");
        let a2 = e10.replace(/\/$/, "");
        this.realtimeUrl = `${a2}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${a2}/auth/v1`, this.storageUrl = `${a2}/storage/v1`, this.functionsUrl = `${a2}/functions/v1`;
        let o2 = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, l2 = function(e11, t3) {
          let { db: s3, auth: r3, realtime: i3, global: n3 } = e11, { db: a3, auth: o3, realtime: l3, global: h2 } = t3, c2 = { db: Object.assign(Object.assign({}, a3), s3), auth: Object.assign(Object.assign({}, o3), r3), realtime: Object.assign(Object.assign({}, l3), i3), global: Object.assign(Object.assign({}, h2), n3), accessToken: () => {
            var e12, t4, s4, r4;
            return e12 = this, t4 = void 0, r4 = function* () {
              return "";
            }, new (s4 = void 0, s4 = Promise)(function(i4, n4) {
              function a4(e13) {
                try {
                  l4(r4.next(e13));
                } catch (e14) {
                  n4(e14);
                }
              }
              function o4(e13) {
                try {
                  l4(r4.throw(e13));
                } catch (e14) {
                  n4(e14);
                }
              }
              function l4(e13) {
                var t5;
                e13.done ? i4(e13.value) : ((t5 = e13.value) instanceof s4 ? t5 : new s4(function(e14) {
                  e14(t5);
                })).then(a4, o4);
              }
              l4((r4 = r4.apply(e12, t4 || [])).next());
            });
          } };
          return e11.accessToken ? c2.accessToken = e11.accessToken : delete c2.accessToken, c2;
        }(null != s2 ? s2 : {}, { db: ev, realtime: e_, auth: Object.assign(Object.assign({}, ew), { storageKey: o2 }), global: ey });
        this.storageKey = null !== (r2 = l2.auth.storageKey) && void 0 !== r2 ? r2 : "", this.headers = null !== (i2 = l2.global.headers) && void 0 !== i2 ? i2 : {}, l2.accessToken ? (this.accessToken = l2.accessToken, this.auth = new Proxy({}, { get: (e11, t3) => {
          throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t3)} is not possible`);
        } })) : this.auth = this._initSupabaseAuthClient(null !== (n2 = l2.auth) && void 0 !== n2 ? n2 : {}, this.headers, l2.global.fetch), this.fetch = eS(t2, this._getAccessToken.bind(this), l2.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, l2.realtime)), this.rest = new h(`${a2}/rest/v1`, { headers: this.headers, schema: l2.db.schema, fetch: this.fetch }), l2.accessToken || this._listenForAuthEvents();
      }
      get functions() {
        return new l(this.functionsUrl, { headers: this.headers, customFetch: this.fetch });
      }
      get storage() {
        return new eg(this.storageUrl, this.headers, this.fetch);
      }
      from(e10) {
        return this.rest.from(e10);
      }
      schema(e10) {
        return this.rest.schema(e10);
      }
      rpc(e10, t2 = {}, s2 = {}) {
        return this.rest.rpc(e10, t2, s2);
      }
      channel(e10, t2 = { config: {} }) {
        return this.realtime.channel(e10, t2);
      }
      getChannels() {
        return this.realtime.getChannels();
      }
      removeChannel(e10) {
        return this.realtime.removeChannel(e10);
      }
      removeAllChannels() {
        return this.realtime.removeAllChannels();
      }
      _getAccessToken() {
        var e10, t2, s2, r2, i2, n2;
        return s2 = this, r2 = void 0, i2 = void 0, n2 = function* () {
          if (this.accessToken)
            return yield this.accessToken();
          let { data: s3 } = yield this.auth.getSession();
          return null !== (t2 = null === (e10 = s3.session) || void 0 === e10 ? void 0 : e10.access_token) && void 0 !== t2 ? t2 : null;
        }, new (i2 || (i2 = Promise))(function(e11, t3) {
          function a2(e12) {
            try {
              l2(n2.next(e12));
            } catch (e13) {
              t3(e13);
            }
          }
          function o2(e12) {
            try {
              l2(n2.throw(e12));
            } catch (e13) {
              t3(e13);
            }
          }
          function l2(t4) {
            var s3;
            t4.done ? e11(t4.value) : ((s3 = t4.value) instanceof i2 ? s3 : new i2(function(e12) {
              e12(s3);
            })).then(a2, o2);
          }
          l2((n2 = n2.apply(s2, r2 || [])).next());
        });
      }
      _initSupabaseAuthClient({ autoRefreshToken: e10, persistSession: t2, detectSessionInUrl: s2, storage: r2, storageKey: i2, flowType: n2, lock: a2, debug: o2 }, l2, h2) {
        var c2;
        let u2 = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
        return new t_({ url: this.authUrl, headers: Object.assign(Object.assign({}, u2), l2), storageKey: i2, autoRefreshToken: e10, persistSession: t2, detectSessionInUrl: s2, storage: r2, flowType: n2, lock: a2, debug: o2, fetch: h2, hasCustomAuthorizationHeader: "Authorization" in this.headers });
      }
      _initRealtimeClient(e10) {
        return new x(this.realtimeUrl, Object.assign(Object.assign({}, e10), { params: Object.assign({ apikey: this.supabaseKey }, null == e10 ? void 0 : e10.params) }));
      }
      _listenForAuthEvents() {
        return this.auth.onAuthStateChange((e10, t2) => {
          this._handleTokenChanged(e10, "CLIENT", null == t2 ? void 0 : t2.access_token);
        });
      }
      _handleTokenChanged(e10, t2, s2) {
        ("TOKEN_REFRESHED" === e10 || "SIGNED_IN" === e10) && this.changedAccessToken !== s2 ? this.changedAccessToken = s2 : "SIGNED_OUT" === e10 && (this.realtime.setAuth(), "STORAGE" == t2 && this.auth.signOut(), this.changedAccessToken = void 0);
      }
    }
    let tk = (e10, t2, s2) => new tb(e10, t2, s2);
  };
  __namedExportsObject["__chunk_5737"] = (e, t) => {
    Object.defineProperty(t, "__esModule", { value: true }), t.version = void 0, t.version = "0.0.0-automated";
  };
  __namedExportsObject["__chunk_4919"] = (e, t, s) => {
    Object.defineProperty(t, "__esModule", { value: true }), t.DEFAULT_HEADERS = void 0;
    let r = s(5737);
    t.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${r.version}` };
  };
  __namedExportsObject["__chunk_6855"] = (e, t) => {
    Object.defineProperty(t, "__esModule", { value: true });
    class s extends Error {
      constructor(e2) {
        super(e2.message), this.name = "PostgrestError", this.details = e2.details, this.hint = e2.hint, this.code = e2.code;
      }
    }
    t.default = s;
  };
  __namedExportsObject["__chunk_3607"] = (e, t, s) => {
    s.r(t), s.d(t, { Headers: () => a, Request: () => o, Response: () => l, default: () => n, fetch: () => i });
    var r = function() {
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      if (void 0 !== s.g)
        return s.g;
      throw Error("unable to locate global object");
    }();
    let i = r.fetch, n = r.fetch.bind(r), a = r.Headers, o = r.Request, l = r.Response;
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
