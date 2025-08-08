import { FC } from "react";
import { Content } from "@prismicio/client";
import Bounded from "@/components/bounded";
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for hero (variation: {slice.variation}) slices.
      <br /> */}
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl text-slate-700  font-nunito">
                {children}
              </h1>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="text-2xl text-center leading-10 font-normal font-nunito-sans text-slate-600 mb-4 md:mb-8 max-w-md">
                {children}
              </p>
            ),
          }}
        />
        <PrismicLink
          field={slice.primary.link_text}
          className="block w-fit bg-cyan-600 :hover:bg-cyan-700 text-white font-nunito-sans rounded-full transition-colors ease-in-out duration-200 text-base py-3 px-8 mb-8 md:mb-10"
        >
          {slice.primary.button_text}
        </PrismicLink>
        <PrismicImage
          field={slice.primary.image}
          className="drop-shadow-2xl max-w-4xl w-full"
        />
      </div>

      {/**
       * 💡 Use Prismic MCP with your code editor
       *
       * Get AI-powered help to build your slice components — based on your actual model.
       *
       * ▶️ Setup:
       * 1. Add a new MCP Server in your code editor:
       *
       * {
       *   "mcpServers": {
       *     "Prismic MCP": {
       *       "command": "npx",
       *       "args": ["-y", "@prismicio/mcp-server@latest"]
       *     }
       *   }
       * }
       *
       * 2. Select a model optimized for coding (e.g. Claude 3.7 Sonnet or similar)
       *
       * ✅ Then open your slice file and ask your code editor:
       *    "Code this slice"
       *
       * Your code editor reads your slice model and helps you code faster ⚡
       * 🎙️ Give your feedback: https://community.prismic.io/t/help-us-shape-the-future-of-slice-creation/19505
       * 📚 Documentation: https://prismic.io/docs/ai#code-with-prismics-mcp-server
       */}
    </Bounded>
  );
};

export default Hero;
