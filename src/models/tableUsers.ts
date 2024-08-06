import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
  Unique,
  AllowNull,
  Default,
  HasOne,
} from "sequelize-typescript";
import { TableRols } from "./tableRoles";
import { cart } from "./cart";
import { Orders } from "./order";

@Table({
  tableName: "Tableusers",
  timestamps: true,
})
export class Tableusers extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.STRING(200), // se define con varchar de 200 tal como lo dice en el moodle
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  password!: string;

  @ForeignKey(() => TableRols)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  rolId!: number;

  @BelongsTo(() => TableRols)
  tableRol!: TableRols;

  @HasOne(() => cart)
  Tableusers!: cart[];

  @HasMany(() => Orders)
  orders!: Orders[];
}
