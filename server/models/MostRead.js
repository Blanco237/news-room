
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Sport", {
        mrid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        tableName: "Sport",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}