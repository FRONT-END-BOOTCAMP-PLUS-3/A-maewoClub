import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { create } from "zustand";

interface RecipeState {
  recipe: RecipeDto | null;
  fetchRecipes: () => Promise<void>;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipe: null,
 
  fetchRecipes: async () => {
    try {
      const res = await fetch("/api/recipes", {
        method: "GET"
      });

      if (!res.ok) {
        throw new Error("유저 정보를 불러올 수 없습니다.");
      }

      const { recipe } = await res.json();
      set({ recipe });
      
    } catch (error) {
      console.error("❌ 유저 정보 불러오기 실패:", error);
      set({ recipe : null });
    }
  },
}));
