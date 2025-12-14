import { GoogleGenAI, Type } from "@google/genai";
import { AdHook, AppIdea } from "../types";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const generateAdHooks = async (productDescription: string): Promise<AdHook[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a world-class direct response copywriter.
      Generate 3 high-converting ad hooks for this product/service: "${productDescription}".
      
      CRITICAL RULES:
      1. Focus on STOPPING THE SCROLL.
      2. Use psychological triggers (Urgency, Curiosity, Status, Fear of Missing Out).
      3. One hook should be "Problem/Agitation", one "Direct Benefit", one "Curiosity/Story".
      
      Return the response in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING, description: "The main text overlay or headline (max 8 words)" },
              angle: { type: Type.STRING, description: "The psychological angle used (e.g. 'Us vs Them')" },
              visualIdea: { type: Type.STRING, description: "Brief description of the image/video visual." },
              icon: { type: Type.STRING, description: "Lucide icon name suitable for this angle" }
            },
            required: ["headline", "angle", "visualIdea", "icon"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AdHook[];
    }
    return [];
  } catch (error) {
    console.error("Failed to generate hooks:", error);
    return [
      {
        headline: "Stop Wasting 50% of Your Budget",
        angle: "Pain Point Agitation",
        visualIdea: "Split screen: Burning money vs. Graph going up",
        icon: "Flame"
      },
      {
        headline: "The Secret Weapon of 7-Figure Brands",
        angle: "Curiosity/Status",
        visualIdea: " blurred dashboard showing high ROAS",
        icon: "Lock"
      },
      {
        headline: "Get Your Ad Team on Speed Dial",
        angle: "Direct Offer",
        visualIdea: "Phone notification showing 'Ad Approved'",
        icon: "Phone"
      }
    ];
  }
};

export const generateAppConcepts = async (businessType: string): Promise<AppIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert app product strategist.
      Generate 3 distinct, high-value app features or concepts for this business type: "${businessType}".
      
      CRITICAL RULES:
      1. Focus on REVENUE GENERATION or CUSTOMER RETENTION.
      2. Features must be practical for a mobile app (push notifications, booking, loyalty, etc.).
      3. Avoid generic "About Us" page ideas.
      
      Return the response in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "A catchy title for the feature" },
              description: { type: Type.STRING, description: "How this feature makes money or saves time." },
              icon: { type: Type.STRING, description: "Lucide icon name suitable for this feature (e.g. Bell, Calendar, Wallet)" }
            },
            required: ["title", "description", "icon"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AppIdea[];
    }
    return [];
  } catch (error) {
    console.error("Failed to generate app concepts:", error);
    return [
      {
        title: "Smart Booking System",
        description: "Allow clients to book appointments 24/7 without calling.",
        icon: "Calendar"
      },
      {
        title: "Loyalty Rewards",
        description: "Digital punch card to encourage repeat visits.",
        icon: "Star"
      },
      {
        title: "Flash Deals",
        description: "Send push notifications to fill slow days instantly.",
        icon: "Zap"
      }
    ];
  }
};