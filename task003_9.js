use("FirstBase");

db.employees.aggregate(
    [
        {
            $group: {
                _id: "$level",
                minAge: { $min: "$age" }
            }
        }
    ]
);