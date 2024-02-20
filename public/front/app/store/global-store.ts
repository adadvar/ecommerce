import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


interface tmpState {
  typeDialog: string;
  setTypeDialog: (typeDialog: string) => void;
  hoveredCatId: number;
  setHoveredCat: (hoveredCatId: number) => void;
  showProfileMenu: boolean;
  setShowProfileMenu: (showProfileMenu: boolean) => void;

}

export const useTmp = create<tmpState>()(
  devtools(
    (set) => ({
      typeDialog: "",
      setTypeDialog: (typeDialog: string) => set({ typeDialog }),
      hoveredCatId: 0,
      setHoveredCat: (hoveredCatId: number) => set({ hoveredCatId }),
      showProfileMenu: false,
      setShowProfileMenu: (showProfileMenu: boolean) => set({ showProfileMenu }),
      res: {},

    })
  )
)
