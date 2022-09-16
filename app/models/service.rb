class Service < ApplicationRecord
    #belongs_to :worker
    #has_many :comments, dependent: :destroy

    validates :name, :type, :location, :info, presence: true

end
