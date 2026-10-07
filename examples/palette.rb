# Vitesse Creamy — syntax and contrast preview
module Garden
  class Plant
    MAX_HEIGHT = 120

    attr_reader :name, :height

    def initialize(name, height: 12.5)
      @name = name
      @height = height
      @healthy = true
    end

    def grow(amount = 2)
      return nil unless @healthy

      @height += amount
      puts "#{name} is now #{@height} cm tall"
      { name: @name, height: @height, flowering: false }
    end
  end
end

plant = Garden::Plant.new("Rosemary", height: 24)
plant.grow(3)
