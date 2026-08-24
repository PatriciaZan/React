//GET /activities?from=YYYY-MM-DD&to=YYYY-MM-DD
export async function getActivitiesBytMonth() {
  const params = new URLSearchParams({
    from: sunday.toISOString(),
    to: saturday.toISOString(),
  });
}

// ALL
// here i added a filter to display 7 activities for a week
// ?from=&to=
router.get("/", async (req, res) => {
  const { from, to } = req.query;
  const { data, error } = await getActivities({ from, to });

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

export async function getActivitiesThisWeek() {
  const now = new Date();
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - now.getDay());
  sunday.setHours(0, 0, 0, 0);

  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  saturday.setHours(23, 59, 59, 999);

  const params = new URLSearchParams({
    from: sunday.toISOString(),
    to: saturday.toISOString(),
  });
}
