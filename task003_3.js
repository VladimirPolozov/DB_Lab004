use("FirstBase");

db.employees.aggregate(
    [
        {
            $group: {
                _id: "$level",
                avgSalary: { $avg: "$salary" }
            }
        },
        {
            $sort: { avgSalary: 1 }
        },
    ]
)