Service.delete_all
Worker.delete_all

3.times do
    worker = Worker.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        position: Faker::Job.position
    )
end