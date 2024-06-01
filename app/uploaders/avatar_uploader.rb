class AvatarUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  include Cloudinary::CarrierWave

  process convert: 'png'
  process tags: ['avatar']

  version :standard do
    process resize_to_fill: [200, 300, :north]
  end

  version :thumbnail do
    resize_to_fit(80, 80)
  end
end
