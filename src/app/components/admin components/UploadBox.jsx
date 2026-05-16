const UploadBox = ({ text, multiple }) => (
    <label className="group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition">
      <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 3v13.5m0 0l4.5-4.5M12 16.5l-4.5-4.5"/>
      </svg>
  
      <span className="text-sm font-medium text-gray-500 group-hover:text-orange-500">
        {text}
      </span>
  
      <span className="text-xs text-gray-400">
        PNG, JPG, WEBP up to 5MB
      </span>
  
      <input type="file" multiple={multiple} className="hidden" />
    </label>
  );