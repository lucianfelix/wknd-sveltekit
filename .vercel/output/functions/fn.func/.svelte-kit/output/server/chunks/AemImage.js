import { c as create_ssr_component, d as add_attribute } from "./index2.js";
let quality = 75;
const AemImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { priority } = $$props;
  let { loading } = $$props;
  let { sizes } = $$props;
  let { clazz } = $$props;
  let { style } = $$props;
  sizes = sizes || "60vw";
  let widths = [384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  let { srcset = widths.map((w) => {
    const originUrl = `${src}?w=${w}&q=${quality}`;
    return `${originUrl} ${w}w`;
  }).join(", ") } = $$props;
  const originSrcUrl = `${src}?w=${width}&q=${quality}`;
  let { imageSrc = `${originSrcUrl} ` } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.priority === void 0 && $$bindings.priority && priority !== void 0)
    $$bindings.priority(priority);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0)
    $$bindings.sizes(sizes);
  if ($$props.clazz === void 0 && $$bindings.clazz && clazz !== void 0)
    $$bindings.clazz(clazz);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  return `<img${add_attribute("alt", alt, 0)}${add_attribute("sizes", sizes, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("src", imageSrc, 0)} decoding="${"async"}" data-nimg="${"1"}"${add_attribute("class", clazz, 0)}${add_attribute("loading", loading, 0)}${add_attribute("style", style, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}>`;
});
export {
  AemImage as A
};
