export const pixelPageView = (account_id = 425875436103619) => {
  fbq("init", `${account_id}`);
  fbq("track", "PageView");
  console.log("account_id", account_id);
};

export const pixelLead = () => {
  console.log("pixel lead");
  fbq("track", "Lead");
};
