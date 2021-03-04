class AddColumnGenusToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :genus, :string
    # add new column (table_name, column_name, data_type)
  end
end
