import{Table,
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
    }from 'sequelize-typescript'
import { Tableusers } from './tableUsers';


    @Table({
    tableName:'TableRols',
    timestamps:true
})

export class TableRols extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),// se define con varchar de 200 tal como lo dice en el moodle
        allowNull: false,
        unique:true
      })
      email!: string;

      @Column({
        type: DataType.STRING(200),
        allowNull: false,
      })
      password!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      name!: string;
      @HasMany(()=>Tableusers)
      Tableusers!:Tableusers[]

    
  }