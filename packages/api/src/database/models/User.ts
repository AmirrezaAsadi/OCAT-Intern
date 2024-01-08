import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class User extends Model<
InferAttributes<User>,
InferCreationAttributes<User>
> {

  // Declare an optional 'id' field
  public declare id: CreationOptional<number>;

  // Declare a 'username' field
  public declare username: string;

  // Declare a 'passwordHash' field
  public declare passwordHash: string;

  // Declare a 'role' field
  public declare role: string;

  declare public createdAt: CreationOptional<Date>;
  declare public updatedAt: CreationOptional<Date>;
  declare public deletedAt: Date | null;

}

// Initialize the model
export function initUserModel(sequelize: Sequelize): void {
  User.init(
    {
      /* eslint-disable sort-keys */

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // Adding createdAt, updatedAt, and deletedAt fields
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

    }, // Add closing curly brace here
    {
      modelName: `User`, // Model name
      sequelize, // Pass the Sequelize instance
      // Additional model options go here
    },
  );
}
