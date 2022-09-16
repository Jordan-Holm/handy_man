class Comment < ApplicationRecord
  belongs_to :service
  validates :title, :desc, presence: true
end
