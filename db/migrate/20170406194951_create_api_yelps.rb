class CreateApiYelps < ActiveRecord::Migration[5.0]
  def change
    create_table :api_yelps do |t|

      t.timestamps
    end
  end
end
