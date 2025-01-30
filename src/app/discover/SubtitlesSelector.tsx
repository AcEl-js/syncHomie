import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Download, Upload } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' }
];

const SubtitesSelector = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState(languages[0]);

  return (
    <div className=" text-white p-4 rounded-lg max-w-md">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Checkbox 
            id="subtitles-toggle"
            checked={isEnabled}
            onCheckedChange={(checked) => setIsEnabled(checked === true)}
            className="h-5 w-5 border-2 border-gray-400 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
          />
           <div className="flex items-center gap-4">
                
                <span>Pick your language</span>
              </div>
          
          {isEnabled && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="ml-2 bg-transparent border border-gray-600 hover:bg-gray-700 hover:border-gray-500 text-white"
                >
                  <span className="mr-2 text-lg">{selectedLang.flag}</span>
                  {selectedLang.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border border-gray-700">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setSelectedLang(lang)}
                    className="flex items-center gap-2 text-white hover:bg-gray-800 focus:bg-gray-800"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {isEnabled && (
          <div className="flex gap-3">
           <Button variant="secondary" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Subtitles
                </Button>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default SubtitesSelector;