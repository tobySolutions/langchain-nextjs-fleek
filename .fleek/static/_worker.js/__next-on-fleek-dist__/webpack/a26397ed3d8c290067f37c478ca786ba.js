// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject["__chunk_5356"] = (e, t, a) => {
    a.d(t, { Vp: () => j, HG: () => S, af: () => C, o_: () => O, iv: () => M, _O: () => _, PZ: () => V, $M: () => F, SM: () => E });
    var r = Object.prototype.toString, i = Array.isArray || function(e2) {
      return "[object Array]" === r.call(e2);
    };
    function s(e2) {
      return "function" == typeof e2;
    }
    function l(e2) {
      return e2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function n(e2, t2) {
      return null != e2 && "object" == typeof e2 && t2 in e2;
    }
    var o = RegExp.prototype.test, p = /\S/, m = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }, u = /\s*/, c = /\s+/, h = /\s*=/, f = /\s*\}/, d = /#|\^|\/|>|\{|&|=|!/;
    function b(e2) {
      this.string = e2, this.tail = e2, this.pos = 0;
    }
    function g(e2, t2) {
      this.view = e2, this.cache = { ".": this.view }, this.parent = t2;
    }
    function v() {
      this.templateCache = { _cache: {}, set: function(e2, t2) {
        this._cache[e2] = t2;
      }, get: function(e2) {
        return this._cache[e2];
      }, clear: function() {
        this._cache = {};
      } };
    }
    b.prototype.eos = function() {
      return "" === this.tail;
    }, b.prototype.scan = function(e2) {
      var t2 = this.tail.match(e2);
      if (!t2 || 0 !== t2.index)
        return "";
      var a2 = t2[0];
      return this.tail = this.tail.substring(a2.length), this.pos += a2.length, a2;
    }, b.prototype.scanUntil = function(e2) {
      var t2, a2 = this.tail.search(e2);
      switch (a2) {
        case -1:
          t2 = this.tail, this.tail = "";
          break;
        case 0:
          t2 = "";
          break;
        default:
          t2 = this.tail.substring(0, a2), this.tail = this.tail.substring(a2);
      }
      return this.pos += t2.length, t2;
    }, g.prototype.push = function(e2) {
      return new g(e2, this);
    }, g.prototype.lookup = function(e2) {
      var t2 = this.cache;
      if (t2.hasOwnProperty(e2))
        i2 = t2[e2];
      else {
        for (var a2, r2, i2, l2, o2, p2, m2 = this, u2 = false; m2; ) {
          if (e2.indexOf(".") > 0)
            for (l2 = m2.view, o2 = e2.split("."), p2 = 0; null != l2 && p2 < o2.length; )
              p2 === o2.length - 1 && (u2 = n(l2, o2[p2]) || (a2 = l2, r2 = o2[p2], null != a2 && "object" != typeof a2 && a2.hasOwnProperty && a2.hasOwnProperty(r2))), l2 = l2[o2[p2++]];
          else
            l2 = m2.view[e2], u2 = n(m2.view, e2);
          if (u2) {
            i2 = l2;
            break;
          }
          m2 = m2.parent;
        }
        t2[e2] = i2;
      }
      return s(i2) && (i2 = i2.call(this.view)), i2;
    }, v.prototype.clearCache = function() {
      void 0 !== this.templateCache && this.templateCache.clear();
    }, v.prototype.parse = function(e2, t2) {
      var a2 = this.templateCache, r2 = e2 + ":" + (t2 || y.tags).join(":"), s2 = void 0 !== a2, n2 = s2 ? a2.get(r2) : void 0;
      return void 0 == n2 && (n2 = function(e3, t3) {
        if (!e3)
          return [];
        var a3, r3, s3, n3, m2, g2, v2, w2, P2, x2 = false, _2 = [], T2 = [], V2 = [], O2 = false, M2 = false, j2 = "", S2 = 0;
        function E2() {
          if (O2 && !M2)
            for (; V2.length; )
              delete T2[V2.pop()];
          else
            V2 = [];
          O2 = false, M2 = false;
        }
        function F2(e4) {
          if ("string" == typeof e4 && (e4 = e4.split(c, 2)), !i(e4) || 2 !== e4.length)
            throw Error("Invalid tags: " + e4);
          a3 = RegExp(l(e4[0]) + "\\s*"), r3 = RegExp("\\s*" + l(e4[1])), s3 = RegExp("\\s*" + l("}" + e4[1]));
        }
        F2(t3 || y.tags);
        for (var C2 = new b(e3); !C2.eos(); ) {
          if (n3 = C2.pos, g2 = C2.scanUntil(a3))
            for (var A, k = 0, I = g2.length; k < I; ++k) {
              (A = v2 = g2.charAt(k), o.call(p, A)) ? (M2 = true, x2 = true, j2 += " ") : (V2.push(T2.length), j2 += v2), T2.push(["text", v2, n3, n3 + 1]), n3 += 1, "\n" === v2 && (E2(), j2 = "", S2 = 0, x2 = false);
            }
          if (!C2.scan(a3))
            break;
          if (O2 = true, m2 = C2.scan(d) || "name", C2.scan(u), "=" === m2 ? (g2 = C2.scanUntil(h), C2.scan(h), C2.scanUntil(r3)) : "{" === m2 ? (g2 = C2.scanUntil(s3), C2.scan(f), C2.scanUntil(r3), m2 = "&") : g2 = C2.scanUntil(r3), !C2.scan(r3))
            throw Error("Unclosed tag at " + C2.pos);
          if (w2 = ">" == m2 ? [m2, g2, n3, C2.pos, j2, S2, x2] : [m2, g2, n3, C2.pos], S2++, T2.push(w2), "#" === m2 || "^" === m2)
            _2.push(w2);
          else if ("/" === m2) {
            if (!(P2 = _2.pop()))
              throw Error('Unopened section "' + g2 + '" at ' + n3);
            if (P2[1] !== g2)
              throw Error('Unclosed section "' + P2[1] + '" at ' + n3);
          } else
            "name" === m2 || "{" === m2 || "&" === m2 ? M2 = true : "=" === m2 && F2(g2);
        }
        if (E2(), P2 = _2.pop())
          throw Error('Unclosed section "' + P2[1] + '" at ' + C2.pos);
        return function(e4) {
          for (var t4, a4 = [], r4 = a4, i2 = [], s4 = 0, l2 = e4.length; s4 < l2; ++s4)
            switch ((t4 = e4[s4])[0]) {
              case "#":
              case "^":
                r4.push(t4), i2.push(t4), r4 = t4[4] = [];
                break;
              case "/":
                i2.pop()[5] = t4[2], r4 = i2.length > 0 ? i2[i2.length - 1][4] : a4;
                break;
              default:
                r4.push(t4);
            }
          return a4;
        }(function(e4) {
          for (var t4, a4, r4 = [], i2 = 0, s4 = e4.length; i2 < s4; ++i2)
            (t4 = e4[i2]) && ("text" === t4[0] && a4 && "text" === a4[0] ? (a4[1] += t4[1], a4[3] = t4[3]) : (r4.push(t4), a4 = t4));
          return r4;
        }(T2));
      }(e2, t2), s2 && a2.set(r2, n2)), n2;
    }, v.prototype.render = function(e2, t2, a2, r2) {
      var i2 = this.getConfigTags(r2), s2 = this.parse(e2, i2), l2 = t2 instanceof g ? t2 : new g(t2, void 0);
      return this.renderTokens(s2, l2, a2, e2, r2);
    }, v.prototype.renderTokens = function(e2, t2, a2, r2, i2) {
      for (var s2, l2, n2, o2 = "", p2 = 0, m2 = e2.length; p2 < m2; ++p2)
        n2 = void 0, "#" === (l2 = (s2 = e2[p2])[0]) ? n2 = this.renderSection(s2, t2, a2, r2, i2) : "^" === l2 ? n2 = this.renderInverted(s2, t2, a2, r2, i2) : ">" === l2 ? n2 = this.renderPartial(s2, t2, a2, i2) : "&" === l2 ? n2 = this.unescapedValue(s2, t2) : "name" === l2 ? n2 = this.escapedValue(s2, t2, i2) : "text" === l2 && (n2 = this.rawValue(s2)), void 0 !== n2 && (o2 += n2);
      return o2;
    }, v.prototype.renderSection = function(e2, t2, a2, r2, l2) {
      var n2 = this, o2 = "", p2 = t2.lookup(e2[1]);
      if (p2) {
        if (i(p2))
          for (var m2 = 0, u2 = p2.length; m2 < u2; ++m2)
            o2 += this.renderTokens(e2[4], t2.push(p2[m2]), a2, r2, l2);
        else if ("object" == typeof p2 || "string" == typeof p2 || "number" == typeof p2)
          o2 += this.renderTokens(e2[4], t2.push(p2), a2, r2, l2);
        else if (s(p2)) {
          if ("string" != typeof r2)
            throw Error("Cannot use higher-order sections without the original template");
          null != (p2 = p2.call(t2.view, r2.slice(e2[3], e2[5]), function(e3) {
            return n2.render(e3, t2, a2, l2);
          })) && (o2 += p2);
        } else
          o2 += this.renderTokens(e2[4], t2, a2, r2, l2);
        return o2;
      }
    }, v.prototype.renderInverted = function(e2, t2, a2, r2, s2) {
      var l2 = t2.lookup(e2[1]);
      if (!l2 || i(l2) && 0 === l2.length)
        return this.renderTokens(e2[4], t2, a2, r2, s2);
    }, v.prototype.indentPartial = function(e2, t2, a2) {
      for (var r2 = t2.replace(/[^ \t]/g, ""), i2 = e2.split("\n"), s2 = 0; s2 < i2.length; s2++)
        i2[s2].length && (s2 > 0 || !a2) && (i2[s2] = r2 + i2[s2]);
      return i2.join("\n");
    }, v.prototype.renderPartial = function(e2, t2, a2, r2) {
      if (a2) {
        var i2 = this.getConfigTags(r2), l2 = s(a2) ? a2(e2[1]) : a2[e2[1]];
        if (null != l2) {
          var n2 = e2[6], o2 = e2[5], p2 = e2[4], m2 = l2;
          0 == o2 && p2 && (m2 = this.indentPartial(l2, p2, n2));
          var u2 = this.parse(m2, i2);
          return this.renderTokens(u2, t2, a2, m2, r2);
        }
      }
    }, v.prototype.unescapedValue = function(e2, t2) {
      var a2 = t2.lookup(e2[1]);
      if (null != a2)
        return a2;
    }, v.prototype.escapedValue = function(e2, t2, a2) {
      var r2 = this.getConfigEscape(a2) || y.escape, i2 = t2.lookup(e2[1]);
      if (null != i2)
        return "number" == typeof i2 && r2 === y.escape ? String(i2) : r2(i2);
    }, v.prototype.rawValue = function(e2) {
      return e2[1];
    }, v.prototype.getConfigTags = function(e2) {
      return i(e2) ? e2 : e2 && "object" == typeof e2 ? e2.tags : void 0;
    }, v.prototype.getConfigEscape = function(e2) {
      return e2 && "object" == typeof e2 && !i(e2) ? e2.escape : void 0;
    };
    var y = { name: "mustache.js", version: "4.2.0", tags: ["{{", "}}"], clearCache: void 0, escape: void 0, parse: void 0, render: void 0, Scanner: void 0, Context: void 0, Writer: void 0, set templateCache(cache) {
      w.templateCache = cache;
    }, get templateCache() {
      return w.templateCache;
    } }, w = new v();
    y.clearCache = function() {
      return w.clearCache();
    }, y.parse = function(e2, t2) {
      return w.parse(e2, t2);
    }, y.render = function(e2, t2, a2, r2) {
      if ("string" != typeof e2)
        throw TypeError('Invalid template! Template should be a "string" but "' + (i(e2) ? "array" : typeof e2) + '" was given as the first argument for mustache#render(template, view, partials)');
      return w.render(e2, t2, a2, r2);
    }, y.escape = function(e2) {
      return String(e2).replace(/[&<>"'`=\/]/g, function(e3) {
        return m[e3];
      });
    }, y.Scanner = b, y.Context = g, y.Writer = v;
    var P = a(2397);
    function x() {
      y.escape = (e2) => e2;
    }
    let _ = (e2) => {
      let t2 = e2.split(""), a2 = [], r2 = (e3, a3) => {
        for (let r3 = a3; r3 < t2.length; r3 += 1)
          if (e3.includes(t2[r3]))
            return r3;
        return -1;
      }, i2 = 0;
      for (; i2 < t2.length; )
        if ("{" === t2[i2] && i2 + 1 < t2.length && "{" === t2[i2 + 1])
          a2.push({ type: "literal", text: "{" }), i2 += 2;
        else if ("}" === t2[i2] && i2 + 1 < t2.length && "}" === t2[i2 + 1])
          a2.push({ type: "literal", text: "}" }), i2 += 2;
        else if ("{" === t2[i2]) {
          let e3 = r2("}", i2);
          if (e3 < 0)
            throw Error("Unclosed '{' in template.");
          a2.push({ type: "variable", name: t2.slice(i2 + 1, e3).join("") }), i2 = e3 + 1;
        } else if ("}" === t2[i2])
          throw Error("Single '}' in template.");
        else {
          let e3 = r2("{}", i2), s2 = (e3 < 0 ? t2.slice(i2) : t2.slice(i2, e3)).join("");
          a2.push({ type: "literal", text: s2 }), i2 = e3 < 0 ? t2.length : e3;
        }
      return a2;
    }, T = (e2) => e2.map((e3) => "name" === e3[0] ? { type: "variable", name: e3[1].includes(".") ? e3[1].split(".")[0] : e3[1] } : ["#", "&", "^", ">"].includes(e3[0]) ? { type: "variable", name: e3[1] } : { type: "literal", text: e3[1] }), V = (e2) => (x(), T(y.parse(e2))), O = (e2, t2) => _(e2).reduce((e3, a2) => {
      if ("variable" === a2.type) {
        if (a2.name in t2)
          return e3 + ("string" == typeof t2[a2.name] ? t2[a2.name] : JSON.stringify(t2[a2.name]));
        throw Error(`(f-string) Missing value for input ${a2.name}`);
      }
      return e3 + a2.text;
    }, ""), M = (e2, t2) => (x(), y.render(e2, t2)), j = { "f-string": O, mustache: M }, S = { "f-string": _, mustache: V }, E = (e2, t2, a2) => {
      try {
        return j[t2](e2, a2);
      } catch (e3) {
        throw (0, P.r)(e3, "INVALID_PROMPT_INPUT");
      }
    }, F = (e2, t2) => S[t2](e2), C = (e2, t2, a2) => {
      if (!(t2 in j)) {
        let e3 = Object.keys(j);
        throw Error(`Invalid template format. Got \`${t2}\`;
                         should be one of ${e3}`);
      }
      try {
        let r2 = a2.reduce((e3, t3) => (e3[t3] = "foo", e3), {});
        Array.isArray(e2) ? e2.forEach((e3) => {
          if ("text" === e3.type)
            E(e3.text, t2, r2);
          else if ("image_url" === e3.type) {
            if ("string" == typeof e3.image_url)
              E(e3.image_url, t2, r2);
            else {
              let a3 = e3.image_url.url;
              E(a3, t2, r2);
            }
          } else
            throw Error(`Invalid message template received. ${JSON.stringify(e3, null, 2)}`);
        }) : E(e2, t2, r2);
      } catch (e3) {
        throw Error(`Invalid prompt schema: ${e3.message}`);
      }
    };
  };
  __namedExportsObject["__chunk_8662"] = (e, t, a) => {
    a.d(t, { A: () => s });
    var r = a(4135), i = a(8677);
    class s extends i.d {
      async formatPromptValue(e2) {
        let t2 = await this.format(e2);
        return new r.StringPromptValue(t2);
      }
    }
  };
  __namedExportsObject["__chunk_7192"] = (e, t, a) => {
    a.d(t, { PromptTemplate: () => s });
    var r = a(8662), i = a(5356);
    class s extends r.A {
      static lc_name() {
        return "PromptTemplate";
      }
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "templateFormat", { enumerable: true, configurable: true, writable: true, value: "f-string" }), Object.defineProperty(this, "validateTemplate", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "additionalContentFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), "mustache" === e2.templateFormat && void 0 === e2.validateTemplate && (this.validateTemplate = false), Object.assign(this, e2), this.validateTemplate) {
          if ("mustache" === this.templateFormat)
            throw Error("Mustache templates cannot be validated.");
          let e3 = this.inputVariables;
          this.partialVariables && (e3 = e3.concat(Object.keys(this.partialVariables))), (0, i.af)(this.template, this.templateFormat, e3);
        }
      }
      _getPromptType() {
        return "prompt";
      }
      async format(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2);
        return (0, i.SM)(this.template, this.templateFormat, t2);
      }
      static fromExamples(e2, t2, a2, r2 = "\n\n", i2 = "") {
        return new s({ inputVariables: a2, template: [i2, ...e2, t2].join(r2) });
      }
      static fromTemplate(e2, t2) {
        let { templateFormat: a2 = "f-string", ...r2 } = t2 ?? {}, l = /* @__PURE__ */ new Set();
        return (0, i.$M)(e2, a2).forEach((e3) => {
          "variable" === e3.type && l.add(e3.name);
        }), new s({ inputVariables: [...l], templateFormat: a2, template: e2, ...r2 });
      }
      async partial(e2) {
        let t2 = this.inputVariables.filter((t3) => !(t3 in e2)), a2 = { ...this.partialVariables ?? {}, ...e2 };
        return new s({ ...this, inputVariables: t2, partialVariables: a2 });
      }
      serialize() {
        if (void 0 !== this.outputParser)
          throw Error("Cannot serialize a prompt template with an output parser");
        return { _type: this._getPromptType(), input_variables: this.inputVariables, template: this.template, template_format: this.templateFormat };
      }
      static async deserialize(e2) {
        if (!e2.template)
          throw Error("Prompt template must have a template");
        return new s({ inputVariables: e2.input_variables, template: e2.template, templateFormat: e2.template_format });
      }
    }
  };
  __namedExportsObject["__chunk_2838"] = (e, t, a) => {
    a.r(t), a.d(t, { AIMessagePromptTemplate: () => i.gc, BaseChatPromptTemplate: () => i.S, BaseMessagePromptTemplate: () => i.dJ, BaseMessageStringPromptTemplate: () => i.wp, BasePromptTemplate: () => r.d, BaseStringPromptTemplate: () => o.A, ChatMessagePromptTemplate: () => i.se, ChatPromptTemplate: () => i.ks, DEFAULT_FORMATTER_MAPPING: () => p.Vp, DEFAULT_PARSER_MAPPING: () => p.HG, FewShotChatMessagePromptTemplate: () => s.U, FewShotPromptTemplate: () => s.FewShotPromptTemplate, HumanMessagePromptTemplate: () => i.kq, ImagePromptTemplate: () => m.r, MessagesPlaceholder: () => i.ax, PipelinePromptTemplate: () => l, PromptTemplate: () => n.PromptTemplate, StructuredPrompt: () => c, SystemMessagePromptTemplate: () => i.ov, checkValidTemplate: () => p.af, interpolateFString: () => p.o_, interpolateMustache: () => p.iv, parseFString: () => p._O, parseMustache: () => p.PZ, parseTemplate: () => p.$M, renderTemplate: () => p.SM });
    var r = a(8677), i = a(2595), s = a(3446);
    class l extends r.d {
      static lc_name() {
        return "PipelinePromptTemplate";
      }
      constructor(e2) {
        super({ ...e2, inputVariables: [] }), Object.defineProperty(this, "pipelinePrompts", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "finalPrompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.pipelinePrompts = e2.pipelinePrompts, this.finalPrompt = e2.finalPrompt, this.inputVariables = this.computeInputValues();
      }
      computeInputValues() {
        let e2 = this.pipelinePrompts.map((e3) => e3.name);
        return [...new Set(this.pipelinePrompts.map((t2) => t2.prompt.inputVariables.filter((t3) => !e2.includes(t3))).flat())];
      }
      static extractRequiredInputValues(e2, t2) {
        return t2.reduce((t3, a2) => (t3[a2] = e2[a2], t3), {});
      }
      async formatPipelinePrompts(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2);
        for (let { name: e3, prompt: a2 } of this.pipelinePrompts) {
          let r2 = l.extractRequiredInputValues(t2, a2.inputVariables);
          a2 instanceof i.ks ? t2[e3] = await a2.formatMessages(r2) : t2[e3] = await a2.format(r2);
        }
        return l.extractRequiredInputValues(t2, this.finalPrompt.inputVariables);
      }
      async formatPromptValue(e2) {
        return this.finalPrompt.formatPromptValue(await this.formatPipelinePrompts(e2));
      }
      async format(e2) {
        return this.finalPrompt.format(await this.formatPipelinePrompts(e2));
      }
      async partial(e2) {
        let t2 = { ...this };
        return t2.inputVariables = this.inputVariables.filter((t3) => !(t3 in e2)), t2.partialVariables = { ...this.partialVariables ?? {}, ...e2 }, new l(t2);
      }
      serialize() {
        throw Error("Not implemented.");
      }
      _getPromptType() {
        return "pipeline";
      }
    }
    var n = a(7192), o = a(8662), p = a(5356), m = a(9343);
    function u(e2) {
      return "object" == typeof e2 && null != e2 && "withStructuredOutput" in e2 && "function" == typeof e2.withStructuredOutput;
    }
    class c extends i.ks {
      get lc_aliases() {
        return { ...super.lc_aliases, schema: "schema_" };
      }
      constructor(e2) {
        super(e2), Object.defineProperty(this, "schema", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "prompts", "structured"] }), this.schema = e2.schema;
      }
      pipe(e2) {
        if (u(e2))
          return super.pipe(e2.withStructuredOutput(this.schema));
        if ("object" == typeof e2 && null != e2 && "lc_id" in e2 && Array.isArray(e2.lc_id) && "langchain_core/runnables/RunnableBinding" === e2.lc_id.join("/") && u(e2.bound))
          return super.pipe(e2.bound.withStructuredOutput(this.schema).bind(e2.kwargs ?? {}).withConfig(e2.config));
        throw Error('Structured prompts need to be piped to a language model that supports the "withStructuredOutput()" method.');
      }
      static fromMessagesAndSchema(e2, t2) {
        return c.fromMessages(e2, { schema: t2 });
      }
    }
  };
  __namedExportsObject["__chunk_9343"] = (e, t, a) => {
    a.d(t, { r: () => l });
    var r = a(4135), i = a(8677), s = a(5356);
    class l extends i.d {
      static lc_name() {
        return "ImagePromptTemplate";
      }
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "prompts", "image"] }), Object.defineProperty(this, "template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "templateFormat", { enumerable: true, configurable: true, writable: true, value: "f-string" }), Object.defineProperty(this, "validateTemplate", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "additionalContentFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.template = e2.template, this.templateFormat = e2.templateFormat ?? this.templateFormat, this.validateTemplate = e2.validateTemplate ?? this.validateTemplate, this.additionalContentFields = e2.additionalContentFields, this.validateTemplate) {
          let e3 = this.inputVariables;
          this.partialVariables && (e3 = e3.concat(Object.keys(this.partialVariables))), (0, s.af)([{ type: "image_url", image_url: this.template }], this.templateFormat, e3);
        }
      }
      _getPromptType() {
        return "prompt";
      }
      async partial(e2) {
        let t2 = this.inputVariables.filter((t3) => !(t3 in e2)), a2 = { ...this.partialVariables ?? {}, ...e2 };
        return new l({ ...this, inputVariables: t2, partialVariables: a2 });
      }
      async format(e2) {
        let t2 = {};
        for (let [a3, r3] of Object.entries(this.template))
          "string" == typeof r3 ? t2[a3] = (0, s.SM)(r3, this.templateFormat, e2) : t2[a3] = r3;
        let a2 = e2.url || t2.url, r2 = e2.detail || t2.detail;
        if (!a2)
          throw Error("Must provide either an image URL.");
        if ("string" != typeof a2)
          throw Error("url must be a string.");
        let i2 = { url: a2 };
        return r2 && (i2.detail = r2), i2;
      }
      async formatPromptValue(e2) {
        let t2 = await this.format(e2);
        return new r.ImagePromptValue(t2);
      }
    }
  };
  __namedExportsObject["__chunk_3446"] = (e, t, a) => {
    a.d(t, { FewShotPromptTemplate: () => n, U: () => o });
    var r = a(8662), i = a(5356), s = a(7192), l = a(2595);
    class n extends r.A {
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "examples", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "exampleSelector", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "examplePrompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "suffix", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "exampleSeparator", { enumerable: true, configurable: true, writable: true, value: "\n\n" }), Object.defineProperty(this, "prefix", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "templateFormat", { enumerable: true, configurable: true, writable: true, value: "f-string" }), Object.defineProperty(this, "validateTemplate", { enumerable: true, configurable: true, writable: true, value: true }), Object.assign(this, e2), void 0 !== this.examples && void 0 !== this.exampleSelector)
          throw Error("Only one of 'examples' and 'example_selector' should be provided");
        if (void 0 === this.examples && void 0 === this.exampleSelector)
          throw Error("One of 'examples' and 'example_selector' should be provided");
        if (this.validateTemplate) {
          let e3 = this.inputVariables;
          this.partialVariables && (e3 = e3.concat(Object.keys(this.partialVariables))), (0, i.af)(this.prefix + this.suffix, this.templateFormat, e3);
        }
      }
      _getPromptType() {
        return "few_shot";
      }
      static lc_name() {
        return "FewShotPromptTemplate";
      }
      async getExamples(e2) {
        if (void 0 !== this.examples)
          return this.examples;
        if (void 0 !== this.exampleSelector)
          return this.exampleSelector.selectExamples(e2);
        throw Error("One of 'examples' and 'example_selector' should be provided");
      }
      async partial(e2) {
        let t2 = this.inputVariables.filter((t3) => !(t3 in e2)), a2 = { ...this.partialVariables ?? {}, ...e2 };
        return new n({ ...this, inputVariables: t2, partialVariables: a2 });
      }
      async format(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2), a2 = await this.getExamples(t2), r2 = await Promise.all(a2.map((e3) => this.examplePrompt.format(e3))), s2 = [this.prefix, ...r2, this.suffix].join(this.exampleSeparator);
        return (0, i.SM)(s2, this.templateFormat, t2);
      }
      serialize() {
        if (this.exampleSelector || !this.examples)
          throw Error("Serializing an example selector is not currently supported");
        if (void 0 !== this.outputParser)
          throw Error("Serializing an output parser is not currently supported");
        return { _type: this._getPromptType(), input_variables: this.inputVariables, example_prompt: this.examplePrompt.serialize(), example_separator: this.exampleSeparator, suffix: this.suffix, prefix: this.prefix, template_format: this.templateFormat, examples: this.examples };
      }
      static async deserialize(e2) {
        let t2;
        let { example_prompt: a2 } = e2;
        if (!a2)
          throw Error("Missing example prompt");
        let r2 = await s.PromptTemplate.deserialize(a2);
        if (Array.isArray(e2.examples))
          t2 = e2.examples;
        else
          throw Error("Invalid examples format. Only list or string are supported.");
        return new n({ inputVariables: e2.input_variables, examplePrompt: r2, examples: t2, exampleSeparator: e2.example_separator, prefix: e2.prefix, suffix: e2.suffix, templateFormat: e2.template_format });
      }
    }
    class o extends l.S {
      _getPromptType() {
        return "few_shot_chat";
      }
      static lc_name() {
        return "FewShotChatMessagePromptTemplate";
      }
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "examples", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "exampleSelector", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "examplePrompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "suffix", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "exampleSeparator", { enumerable: true, configurable: true, writable: true, value: "\n\n" }), Object.defineProperty(this, "prefix", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "templateFormat", { enumerable: true, configurable: true, writable: true, value: "f-string" }), Object.defineProperty(this, "validateTemplate", { enumerable: true, configurable: true, writable: true, value: true }), this.examples = e2.examples, this.examplePrompt = e2.examplePrompt, this.exampleSeparator = e2.exampleSeparator ?? "\n\n", this.exampleSelector = e2.exampleSelector, this.prefix = e2.prefix ?? "", this.suffix = e2.suffix ?? "", this.templateFormat = e2.templateFormat ?? "f-string", this.validateTemplate = e2.validateTemplate ?? true, void 0 !== this.examples && void 0 !== this.exampleSelector)
          throw Error("Only one of 'examples' and 'example_selector' should be provided");
        if (void 0 === this.examples && void 0 === this.exampleSelector)
          throw Error("One of 'examples' and 'example_selector' should be provided");
        if (this.validateTemplate) {
          let e3 = this.inputVariables;
          this.partialVariables && (e3 = e3.concat(Object.keys(this.partialVariables))), (0, i.af)(this.prefix + this.suffix, this.templateFormat, e3);
        }
      }
      async getExamples(e2) {
        if (void 0 !== this.examples)
          return this.examples;
        if (void 0 !== this.exampleSelector)
          return this.exampleSelector.selectExamples(e2);
        throw Error("One of 'examples' and 'example_selector' should be provided");
      }
      async formatMessages(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2), a2 = await this.getExamples(t2);
        a2 = a2.map((e3) => {
          let t3 = {};
          return this.examplePrompt.inputVariables.forEach((a3) => {
            t3[a3] = e3[a3];
          }), t3;
        });
        let r2 = [];
        for (let e3 of a2) {
          let t3 = await this.examplePrompt.formatMessages(e3);
          r2.push(...t3);
        }
        return r2;
      }
      async format(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2), a2 = await this.getExamples(t2), r2 = (await Promise.all(a2.map((e3) => this.examplePrompt.formatMessages(e3)))).flat().map((e3) => e3.content), s2 = [this.prefix, ...r2, this.suffix].join(this.exampleSeparator);
        return (0, i.SM)(s2, this.templateFormat, t2);
      }
      async partial(e2) {
        let t2 = this.inputVariables.filter((t3) => !(t3 in e2)), a2 = { ...this.partialVariables ?? {}, ...e2 };
        return new o({ ...this, inputVariables: t2, partialVariables: a2 });
      }
    }
  };
  __namedExportsObject["__chunk_2595"] = (e, t, a) => {
    a.d(t, { S: () => d, ax: () => h, dJ: () => c, gc: () => y, kq: () => v, ks: () => P, ov: () => w, se: () => b, wp: () => f });
    var r = a(9730), i = a(4135), s = a(1184), l = a(8662), n = a(8677), o = a(7192), p = a(9343), m = a(5356), u = a(2397);
    class c extends s.eq {
      constructor() {
        super(...arguments), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "prompts", "chat"] }), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: true });
      }
      async invoke(e2, t2) {
        return this._callWithConfig((e3) => this.formatMessages(e3), e2, { ...t2, runType: "prompt" });
      }
    }
    class h extends c {
      static lc_name() {
        return "MessagesPlaceholder";
      }
      constructor(e2) {
        "string" == typeof e2 && (e2 = { variableName: e2 }), super(e2), Object.defineProperty(this, "variableName", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "optional", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.variableName = e2.variableName, this.optional = e2.optional ?? false;
      }
      get inputVariables() {
        return [this.variableName];
      }
      async formatMessages(e2) {
        let t2;
        let a2 = e2[this.variableName];
        if (this.optional && !a2)
          return [];
        if (!a2) {
          let e3 = Error(`Field "${this.variableName}" in prompt uses a MessagesPlaceholder, which expects an array of BaseMessages as an input value. Received: undefined`);
          throw e3.name = "InputFormatError", e3;
        }
        try {
          t2 = Array.isArray(a2) ? a2.map(r.coerceMessageLikeToMessage) : [(0, r.coerceMessageLikeToMessage)(a2)];
        } catch (r2) {
          let e3 = "string" == typeof a2 ? a2 : JSON.stringify(a2, null, 2), t3 = Error(`Field "${this.variableName}" in prompt uses a MessagesPlaceholder, which expects an array of BaseMessages or coerceable values as input.

Received value: ${e3}

Additional message: ${r2.message}`);
          throw t3.name = "InputFormatError", t3.lc_error_code = r2.lc_error_code, t3;
        }
        return t2;
      }
    }
    class f extends c {
      constructor(e2) {
        "prompt" in e2 || (e2 = { prompt: e2 }), super(e2), Object.defineProperty(this, "prompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.prompt = e2.prompt;
      }
      get inputVariables() {
        return this.prompt.inputVariables;
      }
      async formatMessages(e2) {
        return [await this.format(e2)];
      }
    }
    class d extends n.d {
      constructor(e2) {
        super(e2);
      }
      async format(e2) {
        return (await this.formatPromptValue(e2)).toString();
      }
      async formatPromptValue(e2) {
        let t2 = await this.formatMessages(e2);
        return new i.ChatPromptValue(t2);
      }
    }
    class b extends f {
      static lc_name() {
        return "ChatMessagePromptTemplate";
      }
      constructor(e2, t2) {
        "prompt" in e2 || (e2 = { prompt: e2, role: t2 }), super(e2), Object.defineProperty(this, "role", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.role = e2.role;
      }
      async format(e2) {
        return new r.ChatMessage(await this.prompt.format(e2), this.role);
      }
      static fromTemplate(e2, t2, a2) {
        return new this(o.PromptTemplate.fromTemplate(e2, { templateFormat: a2?.templateFormat }), t2);
      }
    }
    class g extends c {
      static _messageClass() {
        throw Error("Can not invoke _messageClass from inside _StringImageMessagePromptTemplate");
      }
      constructor(e2, t2) {
        if ("prompt" in e2 || (e2 = { prompt: e2 }), super(e2), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "prompts", "chat"] }), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "inputVariables", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "additionalOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "prompt", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "messageClass", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "chatMessageClass", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.prompt = e2.prompt, Array.isArray(this.prompt)) {
          let e3 = [];
          this.prompt.forEach((t3) => {
            "inputVariables" in t3 && (e3 = e3.concat(t3.inputVariables));
          }), this.inputVariables = e3;
        } else
          this.inputVariables = this.prompt.inputVariables;
        this.additionalOptions = t2 ?? this.additionalOptions;
      }
      createMessage(e2) {
        let t2 = this.constructor;
        if (t2._messageClass())
          return new (t2._messageClass())({ content: e2 });
        if (t2.chatMessageClass) {
          let a2 = t2.chatMessageClass();
          return new a2({ content: e2, role: this.getRoleFromMessageClass(a2.lc_name()) });
        }
        throw Error("No message class defined");
      }
      getRoleFromMessageClass(e2) {
        switch (e2) {
          case "HumanMessage":
            return "human";
          case "AIMessage":
            return "ai";
          case "SystemMessage":
            return "system";
          case "ChatMessage":
            return "chat";
          default:
            throw Error("Invalid message class name");
        }
      }
      static fromTemplate(e2, t2) {
        if ("string" == typeof e2)
          return new this(o.PromptTemplate.fromTemplate(e2, t2));
        let a2 = [];
        for (let r2 of e2)
          if ("string" == typeof r2 || "object" == typeof r2 && "text" in r2) {
            let e3 = "";
            "string" == typeof r2 ? e3 = r2 : "string" == typeof r2.text && (e3 = r2.text ?? "");
            let i2 = { ...t2, ..."string" != typeof r2 ? { additionalContentFields: r2 } : {} };
            a2.push(o.PromptTemplate.fromTemplate(e3, i2));
          } else if ("object" == typeof r2 && "image_url" in r2) {
            let e3, i2 = r2.image_url ?? "", s2 = [];
            if ("string" == typeof i2) {
              let a3 = (t2?.templateFormat === "mustache" ? (0, m.PZ)(i2) : (0, m._O)(i2)).flatMap((e4) => "variable" === e4.type ? [e4.name] : []);
              if ((a3?.length ?? 0) > 0) {
                if (a3.length > 1)
                  throw Error(`Only one format variable allowed per image template.
Got: ${a3}
From: ${i2}`);
                s2 = [a3[0]];
              } else
                s2 = [];
              i2 = { url: i2 }, e3 = new p.r({ template: i2, inputVariables: s2, templateFormat: t2?.templateFormat, additionalContentFields: r2 });
            } else if ("object" == typeof i2)
              s2 = "url" in i2 ? (t2?.templateFormat === "mustache" ? (0, m.PZ)(i2.url) : (0, m._O)(i2.url)).flatMap((e4) => "variable" === e4.type ? [e4.name] : []) : [], e3 = new p.r({ template: i2, inputVariables: s2, templateFormat: t2?.templateFormat, additionalContentFields: r2 });
            else
              throw Error("Invalid image template");
            a2.push(e3);
          }
        return new this({ prompt: a2, additionalOptions: t2 });
      }
      async format(e2) {
        if (this.prompt instanceof l.A) {
          let t2 = await this.prompt.format(e2);
          return this.createMessage(t2);
        }
        {
          let t2 = [];
          for (let a2 of this.prompt) {
            let r2 = {};
            if (!("inputVariables" in a2))
              throw Error(`Prompt ${a2} does not have inputVariables defined.`);
            for (let t3 of a2.inputVariables)
              r2 || (r2 = { [t3]: e2[t3] }), r2 = { ...r2, [t3]: e2[t3] };
            if (a2 instanceof l.A) {
              let e3;
              let i2 = await a2.format(r2);
              "additionalContentFields" in a2 && (e3 = a2.additionalContentFields), t2.push({ ...e3, type: "text", text: i2 });
            } else if (a2 instanceof p.r) {
              let e3;
              let i2 = await a2.format(r2);
              "additionalContentFields" in a2 && (e3 = a2.additionalContentFields), t2.push({ ...e3, type: "image_url", image_url: i2 });
            }
          }
          return this.createMessage(t2);
        }
      }
      async formatMessages(e2) {
        return [await this.format(e2)];
      }
    }
    class v extends g {
      static _messageClass() {
        return r.HumanMessage;
      }
      static lc_name() {
        return "HumanMessagePromptTemplate";
      }
    }
    class y extends g {
      static _messageClass() {
        return r.AIMessage;
      }
      static lc_name() {
        return "AIMessagePromptTemplate";
      }
    }
    class w extends g {
      static _messageClass() {
        return r.SystemMessage;
      }
      static lc_name() {
        return "SystemMessagePromptTemplate";
      }
    }
    class P extends d {
      static lc_name() {
        return "ChatPromptTemplate";
      }
      get lc_aliases() {
        return { promptMessages: "messages" };
      }
      constructor(e2) {
        if (super(e2), Object.defineProperty(this, "promptMessages", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "validateTemplate", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "templateFormat", { enumerable: true, configurable: true, writable: true, value: "f-string" }), "mustache" === e2.templateFormat && void 0 === e2.validateTemplate && (this.validateTemplate = false), Object.assign(this, e2), this.validateTemplate) {
          let e3 = /* @__PURE__ */ new Set();
          for (let t3 of this.promptMessages)
            if (!(t3 instanceof r.BaseMessage))
              for (let a3 of t3.inputVariables)
                e3.add(a3);
          let t2 = this.inputVariables, a2 = new Set(this.partialVariables ? t2.concat(Object.keys(this.partialVariables)) : t2), i2 = new Set([...a2].filter((t3) => !e3.has(t3)));
          if (i2.size > 0)
            throw Error(`Input variables \`${[...i2]}\` are not used in any of the prompt messages.`);
          let s2 = new Set([...e3].filter((e4) => !a2.has(e4)));
          if (s2.size > 0)
            throw Error(`Input variables \`${[...s2]}\` are used in prompt messages but not in the prompt template.`);
        }
      }
      _getPromptType() {
        return "chat";
      }
      async _parseImagePrompts(e2, t2) {
        if ("string" == typeof e2.content)
          return e2;
        let a2 = await Promise.all(e2.content.map(async (e3) => {
          if ("image_url" !== e3.type)
            return e3;
          let a3 = "";
          a3 = "string" == typeof e3.image_url ? e3.image_url : e3.image_url.url;
          let r2 = o.PromptTemplate.fromTemplate(a3, { templateFormat: this.templateFormat }), i2 = await r2.format(t2);
          return "string" != typeof e3.image_url && "url" in e3.image_url ? e3.image_url.url = i2 : e3.image_url = i2, e3;
        }));
        return e2.content = a2, e2;
      }
      async formatMessages(e2) {
        let t2 = await this.mergePartialAndUserVariables(e2), a2 = [];
        for (let e3 of this.promptMessages)
          if (e3 instanceof r.BaseMessage)
            a2.push(await this._parseImagePrompts(e3, t2));
          else {
            let r2 = e3.inputVariables.reduce((a3, r3) => {
              if (!(r3 in t2) && !("MessagesPlaceholder" === e3.constructor.lc_name() && e3.optional))
                throw (0, u.r)(Error(`Missing value for input variable \`${r3.toString()}\``), "INVALID_PROMPT_INPUT");
              return a3[r3] = t2[r3], a3;
            }, {}), i2 = await e3.formatMessages(r2);
            a2 = a2.concat(i2);
          }
        return a2;
      }
      async partial(e2) {
        let t2 = this.inputVariables.filter((t3) => !(t3 in e2)), a2 = { ...this.partialVariables ?? {}, ...e2 };
        return new P({ ...this, inputVariables: t2, partialVariables: a2 });
      }
      static fromTemplate(e2, t2) {
        let a2 = new v({ prompt: o.PromptTemplate.fromTemplate(e2, t2) });
        return this.fromMessages([a2]);
      }
      static fromMessages(e2, t2) {
        let a2 = e2.reduce((e3, a3) => e3.concat(a3 instanceof P ? a3.promptMessages : [function(e4, t3) {
          let a4;
          if ("function" == typeof e4.formatMessages || (0, r.isBaseMessage)(e4))
            return e4;
          if (Array.isArray(e4) && "placeholder" === e4[0]) {
            let t4 = e4[1];
            if ("string" != typeof t4 || "{" !== t4[0] || "}" !== t4[t4.length - 1])
              throw Error(`Invalid placeholder template: "${e4[1]}". Expected a variable name surrounded by curly braces.`);
            return new h({ variableName: t4.slice(1, -1), optional: true });
          }
          let i3 = (0, r.coerceMessageLikeToMessage)(e4);
          if (a4 = "string" == typeof i3.content ? i3.content : i3.content.map((e5) => "text" in e5 ? { ...e5, text: e5.text } : "image_url" in e5 ? { ...e5, image_url: e5.image_url } : e5), "human" === i3._getType())
            return v.fromTemplate(a4, t3);
          if ("ai" === i3._getType())
            return y.fromTemplate(a4, t3);
          if ("system" === i3._getType())
            return w.fromTemplate(a4, t3);
          if (r.ChatMessage.isInstance(i3))
            return b.fromTemplate(i3.content, i3.role, t3);
          throw Error(`Could not coerce message prompt template from input. Received message type: "${i3._getType()}".`);
        }(a3, t2)]), []), i2 = e2.reduce((e3, t3) => t3 instanceof P ? Object.assign(e3, t3.partialVariables) : e3, /* @__PURE__ */ Object.create(null)), s2 = /* @__PURE__ */ new Set();
        for (let e3 of a2)
          if (!(e3 instanceof r.BaseMessage))
            for (let t3 of e3.inputVariables)
              t3 in i2 || s2.add(t3);
        return new this({ ...t2, inputVariables: [...s2], promptMessages: a2, partialVariables: i2, templateFormat: t2?.templateFormat });
      }
      static fromPromptMessages(e2) {
        return this.fromMessages(e2);
      }
    }
  };
  __namedExportsObject["__chunk_8677"] = (e, t, a) => {
    a.d(t, { d: () => i });
    var r = a(1184);
    class i extends r.eq {
      get lc_attributes() {
        return { partialVariables: void 0 };
      }
      constructor(e2) {
        super(e2), Object.defineProperty(this, "lc_serializable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "lc_namespace", { enumerable: true, configurable: true, writable: true, value: ["langchain_core", "prompts", this._getPromptType()] }), Object.defineProperty(this, "inputVariables", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "outputParser", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "partialVariables", { enumerable: true, configurable: true, writable: true, value: void 0 });
        let { inputVariables: t2 } = e2;
        if (t2.includes("stop"))
          throw Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");
        Object.assign(this, e2);
      }
      async mergePartialAndUserVariables(e2) {
        let t2 = this.partialVariables ?? {}, a2 = {};
        for (let [e3, r2] of Object.entries(t2))
          "string" == typeof r2 ? a2[e3] = r2 : a2[e3] = await r2();
        return { ...a2, ...e2 };
      }
      async invoke(e2, t2) {
        return this._callWithConfig((e3) => this.formatPromptValue(e3), e2, { ...t2, runType: "prompt" });
      }
      serialize() {
        throw Error("Use .toJSON() instead");
      }
      static async deserialize(e2) {
        switch (e2._type) {
          case "prompt": {
            let { PromptTemplate: t2 } = await Promise.resolve().then(a.bind(a, 7192));
            return t2.deserialize(e2);
          }
          case void 0: {
            let { PromptTemplate: t2 } = await Promise.resolve().then(a.bind(a, 7192));
            return t2.deserialize({ ...e2, _type: "prompt" });
          }
          case "few_shot": {
            let { FewShotPromptTemplate: t2 } = await Promise.resolve().then(a.bind(a, 3446));
            return t2.deserialize(e2);
          }
          default:
            throw Error(`Invalid prompt type in config: ${e2._type}`);
        }
      }
    }
  };
  return __namedExportsObject;
};
export {
  __getNamedExports
};
