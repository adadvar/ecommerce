import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


interface tmpState {
  typeDialog: string;
  setTypeDialog: (typeDialog: string) => void;
  hoveredMenu: string;
  setHoveredMenu: (hoveredMenu: string) => void;
  hoveredMegaMenu: string;
  setHoveredMegaMenu: (hoveredMegaMenu: string) => void;


}

export const useTmp = create<tmpState>()(
  devtools(
    (set) => ({
      typeDialog: "",
      setTypeDialog: (typeDialog: string) => set({ typeDialog }),
      hoveredMenu: '',
      setHoveredMenu: (hoveredMenu: string) => set({ hoveredMenu }),
      hoveredMegaMenu: '',
      setHoveredMegaMenu: (hoveredMegaMenu: string) => set({ hoveredMegaMenu }),

    })
  )
)
