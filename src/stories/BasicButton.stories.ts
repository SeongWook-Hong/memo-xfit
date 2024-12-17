import BasicButton from "@/components/common/BasicButton";

export default {
  title: "Test/BasicButton",
  component: BasicButton,
};

export const orange = {
  args: {
    color: "orange",
    size: "sm",
    children: "수락",
  },
};
export const gray = {
  args: {
    color: "gray",
    size: "lg",
    children: "거절",
  },
};
