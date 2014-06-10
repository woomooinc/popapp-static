module Sass::Script::Functions
  # Does the supplied image exists?
  def file_exists(image_file)
    path = image_file.value
    # Compute the real path to the image on the file system if the images_dir is set.
    if Compass.configuration.images_path
      path = File.join(Compass.configuration.images_path, path)
    else
      path = File.join(Compass.configuration.project_path, path)
    end

    Sass::Script::Bool.new(File.exists?(path))
  end

  # Generate a filename with @2x appended to the end
  def retina_filename(image_file)
    filename = image_file.value
    parts = filename.split('.')
    ext = parts.pop
    f = parts.pop
    f = f + '@2x'
    parts.push(f)
    parts.push(ext)
    Sass::Script::String.new(parts.join('.'))
  end

  # Change filename to xxx/xxx.png
  def last_folder_filename_path(image_file)
    filename = image_file.value
    parts = filename.split('/')
    length = parts.length
    name = parts[ length-1 ]
    folder = parts[ length-2 ]
    Sass::Script::String.new([].push(folder).push(name).join('/'))
  end

  def suffix_filename( image_file, suffix )
    filename = image_file.value
    parts = filename.split('.')
    ext = parts.pop
    f = parts.pop
    f = f + suffix.value
    parts.push(f)
    parts.push(ext)
    Sass::Script::String.new(parts.join('.'))
  end
end