
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Story", {
        sid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    },
    {
        tableName: "Story",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}