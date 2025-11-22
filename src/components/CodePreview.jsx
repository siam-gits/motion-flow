import React, { useState } from 'react'; // Import React and useState
import { useStore } from '../store';
import { Copy, Check } from 'lucide-react'; // Import icons for visual feedback

export default function CodePreview() {
  const { selectedComponent } = useStore();
  // 1. State to track if the code has been successfully copied
  const [isCopied, setIsCopied] = useState(false);

  // Default placeholder code
  const defaultCode = '// Select a component to see the code';

  // Generate the component code based on selection
  const componentCode = selectedComponent
    ? `<motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  transition={{ duration: 0.8 }}
>
  {/* Replace with your content for: ${selectedComponent.name} */}
</motion.div>`
    : defaultCode;

  // 2. Handle the copy action
  const handleCopy = () => {
    if (selectedComponent) {
      // Use the modern Clipboard API
      navigator.clipboard.writeText(componentCode).then(() => {
        setIsCopied(true);
        // 3. Reset the "Copied" status after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy code: ', err);
        // Fallback for older browsers or failed copy
        alert('Could not copy code. Please copy manually.');
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Generated Code</h3>
      
      {/* Code Block */}
      <pre className="bg-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 overflow-x-auto">
        <code className="text-green-400 font-mono text-xs md:text-sm whitespace-pre-wrap">{componentCode}</code>
      </pre>
      
      {/* Copy Button */}
      <button 
        onClick={handleCopy}
        disabled={!selectedComponent || isCopied} // Disable if no component is selected or if it's currently showing 'Copied'
        // Dynamic classes based on isCopied state
        className={`mt-4 md:mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition duration-300 w-full sm:w-auto
          ${isCopied 
            ? 'bg-green-500 text-white cursor-default' // Success state (Green)
            : selectedComponent 
              ? 'bg-purple-600 hover:bg-purple-700' // Ready state (Purple)
              : 'bg-gray-700 text-gray-400 cursor-not-allowed' // Disabled state (Grey)
          }`
        }
      >
        {isCopied ? (
          <>
            <Check className="w-5 h-5" />
            Code Copied!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" />
            {selectedComponent ? 'Copy Code' : 'Select Component'}
          </>
        )}
      </button>
    </div>
  );
}