module Types
  class HospitalType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :pharmacies, [Types::PharmacyType], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
