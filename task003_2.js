use("FirstBase");

db.employees.aggregate(
    [
        {
            $group: {
                _id: null,
                maxSalary: { $max: "$salary" },
                minSalary: { $min: "$salary" }
            }
        }
    ]
);