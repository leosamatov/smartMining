export const pixelPageView = (account_id = 425875436103619) => {
  fbq("init", `${account_id}`);
  fbq("track", "PageView");
};

export const pixelLead = () => {
  fbq("track", "Lead");
};
