import { a8 as ContextTracker, $ as ExternalTokenizer, X as styleTags, Y as tags, a0 as LRParser, Z as LRLanguage, Q as indentNodeProp, U as foldNodeProp, _ as LanguageSupport, s as syntaxTree } from "./Editor.5fe21e51.js";
import "./index.cce5ef5a.js";
import "./account.9b7625d0.js";
const StartTag = 1, StartCloseTag = 2, MissingCloseTag = 3, mismatchedStartCloseTag = 4, incompleteStartCloseTag = 5, commentContent$1 = 35, piContent$1 = 36, cdataContent$1 = 37, Element$1 = 11, OpenTag = 13;
function nameChar(ch) {
  return ch == 45 || ch == 46 || ch == 58 || ch >= 65 && ch <= 90 || ch == 95 || ch >= 97 && ch <= 122 || ch >= 161;
}
function isSpace(ch) {
  return ch == 9 || ch == 10 || ch == 13 || ch == 32;
}
let cachedName = null, cachedInput = null, cachedPos = 0;
function tagNameAfter(input, offset) {
  let pos = input.pos + offset;
  if (cachedInput == input && cachedPos == pos)
    return cachedName;
  while (isSpace(input.peek(offset)))
    offset++;
  let name = "";
  for (; ; ) {
    let next = input.peek(offset);
    if (!nameChar(next))
      break;
    name += String.fromCharCode(next);
    offset++;
  }
  cachedInput = input;
  cachedPos = pos;
  return cachedName = name || null;
}
function ElementContext(name, parent) {
  this.name = name;
  this.parent = parent;
  this.hash = parent ? parent.hash : 0;
  for (let i = 0; i < name.length; i++)
    this.hash += (this.hash << 4) + name.charCodeAt(i) + (name.charCodeAt(i) << 8);
}
const elementContext = new ContextTracker({
  start: null,
  shift(context, term, stack, input) {
    return term == StartTag ? new ElementContext(tagNameAfter(input, 1) || "", context) : context;
  },
  reduce(context, term) {
    return term == Element$1 && context ? context.parent : context;
  },
  reuse(context, node, _stack, input) {
    let type = node.type.id;
    return type == StartTag || type == OpenTag ? new ElementContext(tagNameAfter(input, 1) || "", context) : context;
  },
  hash(context) {
    return context ? context.hash : 0;
  },
  strict: false
});
const startTag = new ExternalTokenizer((input, stack) => {
  if (input.next != 60)
    return;
  input.advance();
  if (input.next == 47) {
    input.advance();
    let name = tagNameAfter(input, 0);
    if (!name)
      return input.acceptToken(incompleteStartCloseTag);
    if (stack.context && name == stack.context.name)
      return input.acceptToken(StartCloseTag);
    for (let cx = stack.context; cx; cx = cx.parent)
      if (cx.name == name)
        return input.acceptToken(MissingCloseTag, -2);
    input.acceptToken(mismatchedStartCloseTag);
  } else if (input.next != 33 && input.next != 63) {
    return input.acceptToken(StartTag);
  }
}, { contextual: true });
function scanTo(type, end) {
  return new ExternalTokenizer((input) => {
    for (let endPos = 0, len = 0; ; len++) {
      if (input.next < 0) {
        if (len)
          input.acceptToken(type);
        break;
      }
      if (input.next == end.charCodeAt(endPos)) {
        endPos++;
        if (endPos == end.length) {
          if (len > end.length)
            input.acceptToken(type, 1 - end.length);
          break;
        }
      } else {
        endPos = input.next == end.charCodeAt(0) ? 1 : 0;
      }
      input.advance();
    }
  });
}
const commentContent = scanTo(commentContent$1, "-->");
const piContent = scanTo(piContent$1, "?>");
const cdataContent = scanTo(cdataContent$1, "]]>");
const xmlHighlighting = styleTags({
  Text: tags.content,
  "StartTag StartCloseTag EndTag SelfCloseEndTag": tags.angleBracket,
  TagName: tags.tagName,
  "MismatchedCloseTag/Tagname": [tags.tagName, tags.invalid],
  AttributeName: tags.attributeName,
  AttributeValue: tags.attributeValue,
  Is: tags.definitionOperator,
  "EntityReference CharacterReference": tags.character,
  Comment: tags.blockComment,
  ProcessingInst: tags.processingInstruction,
  DoctypeDecl: tags.documentMeta,
  Cdata: tags.special(tags.string)
});
const parser = LRParser.deserialize({
  version: 14,
  states: ",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",
  stateData: ")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",
  goto: "%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",
  nodeNames: "\u26A0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
  maxTerm: 47,
  context: elementContext,
  nodeProps: [
    ["closedBy", 1, "SelfCloseEndTag EndTag", 13, "CloseTag MissingCloseTag"],
    ["openedBy", 12, "StartTag StartCloseTag", 19, "OpenTag", 20, "StartTag"]
  ],
  propSources: [xmlHighlighting],
  skippedNodes: [0],
  repeatNodeCount: 8,
  tokenData: "Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kX$rUVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kP%ZRVPOv%Uw!^%U!_~%UW%iR{WOr%dsv%dw~%d_%{]VP{WyUOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{RzYVPOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POW~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOX~Z(xWVP{WOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[U|QVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k]*uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k]+hUdSVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}`S^QVP{WOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWVP{WOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kX/xU{WOq%dqr0[sv%dw!a%d!a!b=X!b~%dX0aZ{WOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dX1XT{WOr%dsv%dw}%d}!O1h!O~%dX1oR}P{WOr%dsv%dw~%dX1}T{WOr%dsv%dw!q%d!q!r2^!r~%dX2cT{WOr%dsv%dw!e%d!e!f2r!f~%dX2wT{WOr%dsv%dw!v%d!v!w3W!w~%dX3]T{WOr%dsv%dw!{%d!{!|3l!|~%dX3qT{WOr%dsv%dw!r%d!r!s4Q!s~%dX4VT{WOr%dsv%dw!g%d!g!h4f!h~%dX4kV{WOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOiPX5jRiP{WOr%dsv%dw~%dX5xV{WOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dX6dT{WOr%dsv%dw!f%d!f!g6s!g~%dX6xT{WOr%dsv%dw!c%d!c!d7X!d~%dX7^T{WOr%dsv%dw!v%d!v!w7m!w~%dX7rT{WOr%dsv%dw!c%d!c!d8R!d~%dX8WT{WOr%dsv%dw!}%d!}#O8g#O~%dX8nR{WxPOr%dsv%dw~%dX8|T{WOr%dsv%dw#W%d#W#X9]#X~%dX9bT{WOr%dsv%dw#T%d#T#U9q#U~%dX9vT{WOr%dsv%dw#h%d#h#i:V#i~%dX:[T{WOr%dsv%dw#T%d#T#U8R#U~%dX:pT{WOr%dsv%dw#c%d#c#d;P#d~%dX;UT{WOr%dsv%dw#V%d#V#W;e#W~%dX;jT{WOr%dsv%dw#h%d#h#i;y#i~%dX<OT{WOr%dsv%dw#m%d#m#n<_#n~%dX<dT{WOr%dsv%dw#d%d#d#e<s#e~%dX<xT{WOr%dsv%dw#X%d#X#Y4f#Y~%dX=`R!PP{WOr%dsv%dw~%dZ=rUaQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_U[UVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU!OQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWVP{WOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhUwQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k",
  tokenizers: [startTag, commentContent, piContent, cdataContent, 0, 1, 2, 3],
  topRules: { "Document": [0, 6] },
  tokenPrec: 0
});
function tagName(doc, tag) {
  let name = tag && tag.getChild("TagName");
  return name ? doc.sliceString(name.from, name.to) : "";
}
function elementName(doc, tree) {
  let tag = tree && tree.firstChild;
  return !tag || tag.name != "OpenTag" ? "" : tagName(doc, tag);
}
function attrName(doc, tag, pos) {
  let attr = tag && tag.getChildren("Attribute").find((a) => a.from <= pos && a.to >= pos);
  let name = attr && attr.getChild("AttributeName");
  return name ? doc.sliceString(name.from, name.to) : "";
}
function findParentElement(tree) {
  for (let cur = tree && tree.parent; cur; cur = cur.parent)
    if (cur.name == "Element")
      return cur;
  return null;
}
function findLocation(state, pos) {
  var _a;
  let at = syntaxTree(state).resolveInner(pos, -1), inTag = null;
  for (let cur = at; !inTag && cur.parent; cur = cur.parent)
    if (cur.name == "OpenTag" || cur.name == "CloseTag" || cur.name == "SelfClosingTag" || cur.name == "MismatchedCloseTag")
      inTag = cur;
  if (inTag && (inTag.to > pos || inTag.lastChild.type.isError)) {
    let elt = inTag.parent;
    if (at.name == "TagName")
      return inTag.name == "CloseTag" || inTag.name == "MismatchedCloseTag" ? { type: "closeTag", from: at.from, context: elt } : { type: "openTag", from: at.from, context: findParentElement(elt) };
    if (at.name == "AttributeName")
      return { type: "attrName", from: at.from, context: inTag };
    if (at.name == "AttributeValue")
      return { type: "attrValue", from: at.from, context: inTag };
    let before = at == inTag || at.name == "Attribute" ? at.childBefore(pos) : at;
    if ((before === null || before === void 0 ? void 0 : before.name) == "StartTag")
      return { type: "openTag", from: pos, context: findParentElement(elt) };
    if ((before === null || before === void 0 ? void 0 : before.name) == "StartCloseTag" && before.to <= pos)
      return { type: "closeTag", from: pos, context: elt };
    if ((before === null || before === void 0 ? void 0 : before.name) == "Is")
      return { type: "attrValue", from: pos, context: inTag };
    if (before)
      return { type: "attrName", from: pos, context: inTag };
    return null;
  } else if (at.name == "StartCloseTag") {
    return { type: "closeTag", from: pos, context: at.parent };
  }
  while (at.parent && at.to == pos && !((_a = at.lastChild) === null || _a === void 0 ? void 0 : _a.type.isError))
    at = at.parent;
  if (at.name == "Element" || at.name == "Text" || at.name == "Document")
    return { type: "tag", from: pos, context: at.name == "Element" ? at : findParentElement(at) };
  return null;
}
class Element {
  constructor(spec, attrs, attrValues) {
    this.attrs = attrs;
    this.attrValues = attrValues;
    this.children = [];
    this.name = spec.name;
    this.completion = Object.assign(Object.assign({ type: "type" }, spec.completion || {}), { label: this.name });
    this.openCompletion = Object.assign(Object.assign({}, this.completion), { label: "<" + this.name });
    this.closeCompletion = Object.assign(Object.assign({}, this.completion), { label: "</" + this.name + ">", boost: 2 });
    this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), { label: this.name + ">" });
    this.text = spec.textContent ? spec.textContent.map((s) => ({ label: s, type: "text" })) : [];
  }
}
const Identifier = /^[:\-\.\w\u00b7-\uffff]*$/;
function attrCompletion(spec) {
  return Object.assign(Object.assign({ type: "property" }, spec.completion || {}), { label: spec.name });
}
function valueCompletion(spec) {
  return typeof spec == "string" ? { label: `"${spec}"`, type: "constant" } : /^"/.test(spec.label) ? spec : Object.assign(Object.assign({}, spec), { label: `"${spec.label}"` });
}
function completeFromSchema(eltSpecs, attrSpecs) {
  let allAttrs = [], globalAttrs = [];
  let attrValues = /* @__PURE__ */ Object.create(null);
  for (let s of attrSpecs) {
    let completion = attrCompletion(s);
    allAttrs.push(completion);
    if (s.global)
      globalAttrs.push(completion);
    if (s.values)
      attrValues[s.name] = s.values.map(valueCompletion);
  }
  let allElements = [], topElements = [];
  let byName = /* @__PURE__ */ Object.create(null);
  for (let s of eltSpecs) {
    let attrs = globalAttrs, attrVals = attrValues;
    if (s.attributes)
      attrs = attrs.concat(s.attributes.map((s2) => {
        if (typeof s2 == "string")
          return allAttrs.find((a) => a.label == s2) || { label: s2, type: "property" };
        if (s2.values) {
          if (attrVals == attrValues)
            attrVals = Object.create(attrVals);
          attrVals[s2.name] = s2.values.map(valueCompletion);
        }
        return attrCompletion(s2);
      }));
    let elt = new Element(s, attrs, attrVals);
    byName[elt.name] = elt;
    allElements.push(elt);
    if (s.top)
      topElements.push(elt);
  }
  if (!topElements.length)
    topElements = allElements;
  for (let i = 0; i < allElements.length; i++) {
    let s = eltSpecs[i], elt = allElements[i];
    if (s.children) {
      for (let ch of s.children)
        if (byName[ch])
          elt.children.push(byName[ch]);
    } else {
      elt.children = allElements;
    }
  }
  return (cx) => {
    var _a;
    let { doc } = cx.state, loc = findLocation(cx.state, cx.pos);
    if (!loc || loc.type == "tag" && !cx.explicit)
      return null;
    let { type, from, context } = loc;
    if (type == "openTag") {
      let children = topElements;
      let parentName = elementName(doc, context);
      if (parentName) {
        let parent = byName[parentName];
        children = (parent === null || parent === void 0 ? void 0 : parent.children) || allElements;
      }
      return {
        from,
        options: children.map((ch) => ch.completion),
        validFor: Identifier
      };
    } else if (type == "closeTag") {
      let parentName = elementName(doc, context);
      return parentName ? {
        from,
        to: cx.pos + (doc.sliceString(cx.pos, cx.pos + 1) == ">" ? 1 : 0),
        options: [((_a = byName[parentName]) === null || _a === void 0 ? void 0 : _a.closeNameCompletion) || { label: parentName + ">", type: "type" }],
        validFor: Identifier
      } : null;
    } else if (type == "attrName") {
      let parent = byName[tagName(doc, context)];
      return {
        from,
        options: (parent === null || parent === void 0 ? void 0 : parent.attrs) || globalAttrs,
        validFor: Identifier
      };
    } else if (type == "attrValue") {
      let attr = attrName(doc, context, from);
      if (!attr)
        return null;
      let parent = byName[tagName(doc, context)];
      let values = ((parent === null || parent === void 0 ? void 0 : parent.attrValues) || attrValues)[attr];
      if (!values || !values.length)
        return null;
      return {
        from,
        to: cx.pos + (doc.sliceString(cx.pos, cx.pos + 1) == '"' ? 1 : 0),
        options: values,
        validFor: /^"[^"]*"?$/
      };
    } else if (type == "tag") {
      let parentName = elementName(doc, context), parent = byName[parentName];
      let closing = [], last = context && context.lastChild;
      if (parentName && (!last || last.name != "CloseTag" || tagName(doc, last) != parentName))
        closing.push(parent ? parent.closeCompletion : { label: "</" + parentName + ">", type: "type", boost: 2 });
      let options = closing.concat(((parent === null || parent === void 0 ? void 0 : parent.children) || (context ? allElements : topElements)).map((e) => e.openCompletion));
      if (context && (parent === null || parent === void 0 ? void 0 : parent.text.length)) {
        let openTag = context.firstChild;
        if (openTag.to > cx.pos - 20 && !/\S/.test(cx.state.sliceDoc(openTag.to, cx.pos)))
          options = options.concat(parent.text);
      }
      return {
        from,
        options,
        validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
      };
    } else {
      return null;
    }
  };
}
const xmlLanguage = /* @__PURE__ */ LRLanguage.define({
  parser: /* @__PURE__ */ parser.configure({
    props: [
      /* @__PURE__ */ indentNodeProp.add({
        Element(context) {
          let closed = /^\s*<\//.test(context.textAfter);
          return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(context) {
          return context.column(context.node.from) + context.unit;
        }
      }),
      /* @__PURE__ */ foldNodeProp.add({
        Element(subtree) {
          let first = subtree.firstChild, last = subtree.lastChild;
          if (!first || first.name != "OpenTag")
            return null;
          return { from: first.to, to: last.name == "CloseTag" ? last.from : subtree.to };
        }
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/$/
  }
});
function xml(conf = {}) {
  return new LanguageSupport(xmlLanguage, xmlLanguage.data.of({
    autocomplete: completeFromSchema(conf.elements || [], conf.attributes || [])
  }));
}
export {
  completeFromSchema,
  xml,
  xmlLanguage
};
//# sourceMappingURL=index.9821a120.js.map
