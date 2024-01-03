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
  // Sequelize will automatically handle the id, createdAt, and updatedAt fields

  // Declare an optional 'id' field
  public declare id: CreationOptional<number>;

  // Declare a 'username' field
  public declare username: string;

  // Declare a 'passwordHash' field
  public declare passwordHash: string;

  // Declare a 'role' field
  public declare role: string;

  // Other fields can be added here as needed
}

// Initialize the model
export function initUserModel(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      passwordHash: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },

    },
    {
      modelName: `User`, // Model name
      sequelize, // Pass the Sequelize instance
      // Additional model options go here
    },
  );
}
