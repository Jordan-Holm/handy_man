class AddWorkerToServices < ActiveRecord::Migration[7.0]
  def change
    add_reference :services, :worker, null: false, foreign_key: true
  end
end
