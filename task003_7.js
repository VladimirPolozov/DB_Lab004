use("FirstBase");

db.employees.aggregate(
    [
        {
            $match: {
                skills: "Python"
            }
        },
        {
            $unwind: "$skills"
        },
        {
            $match: {
                skills: { $ne: "Python" }
            }
        },
        {
            $group: {
                _id: null,
                otherSkills: { $addToSet: "$skills" }
            }
        }
    ]
);