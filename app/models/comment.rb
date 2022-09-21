class Comment < ApplicationRecord
  # belongs_to :service
  # has_many :comments, dependent: :destroy
 
  validates :title, :desc, presence: true
end
