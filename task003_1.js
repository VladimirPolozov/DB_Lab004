use("FirstBase");

db.employees.aggregate([
    {
      $match: { level: "Middle" }
    },
    {
      $group: {
        _id: null,
        averageAge: { $avg: "$age" }
      }
    }
  ])    