use("FirstBase");

db.employees.aggregate(
    [
        { $unwind: "$skills" },
        { 
            $group: {
                _id: "$skills",
                count: { $sum: 1 }
            }
        }
    ]
)ж