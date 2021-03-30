class RemoveRatingFromSnacks < ActiveRecord::Migration[6.1]
  def change
    remove_column :snacks, :rating, :integer
  end
end
