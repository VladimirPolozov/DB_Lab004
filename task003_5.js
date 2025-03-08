use("FirstBase");

db.employees.aggregate(
    [
        {
            $match: {
                age: { $gte: 20, $lte: 30 }
            }
        },
        {
            $unwind: "$skills"
        },
        {
            $group: {
                _id: null,
                uniqueSkills: { $addToSet: "$skills" }
            }
        },
        {
            $project: {
                _id: 0,
                uniqueSkills: 1
            }
        }
    ]
);