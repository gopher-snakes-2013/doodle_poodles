class CreatePoodles < ActiveRecord::Migration
  def up
    create_table :poodles do |t|
      t.string :picture_url
    end
  end

  def down
    drop_table :poodles
  end
end
