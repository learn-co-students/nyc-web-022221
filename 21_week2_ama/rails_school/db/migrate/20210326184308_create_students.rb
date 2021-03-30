class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :age
      t.string :grade
      t.string :integer

      t.timestamps
    end
  end
end
