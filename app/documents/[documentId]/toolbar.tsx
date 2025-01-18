'use client';
import { Separator } from '@/components/ui/separator';

import { useEditorStore } from '@/store/use-editor-store';

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react';

import { FontFamilyButton } from '@/components/FontFamilyButton';
import { ToolbarButton } from '@/components/ToolbarButton';

const Toolbar = () => {
  const { editor } = useEditorStore();
  console.log('toolbar', { editor });

  const section: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive: boolean;
  }[][] = [
    [
      {
        label: 'undo',
        Icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: 'Redo',
        Icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: 'print',
        Icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: 'Spall check',
        Icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute('spallCheck');
          editor?.view.dom.setAttribute(
            'spallCheck',
            current === 'false' ? 'true' : 'false'
          );
        },
      },
    ],
    [
      {
        label: 'Bold',
        Icon: BoldIcon,
        isActive: editor?.isActive('bold'),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: 'italic',
        Icon: ItalicIcon,
        isActive: editor?.isActive('italic'),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: 'Underline',
        Icon: UnderlineIcon,
        isActive: editor?.isActive('underline'),
        onClick: () =>
          editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: 'Commit',
        Icon: MessageSquarePlusIcon,
        onClick: () => console.log('todo commit'),
        isActive: false,
      },
      {
        label: 'List Todo',
        Icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive('taskList'),
      },
      {
        label: 'Remove Formatting',
        Icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];
  return (
    <div
      className='bg-[#F1F4F9]  px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex
    items-center gap-x-0.5 overflow-x-auto'
    >
      {section[0].map((item) => (
        <ToolbarButton
          key={item.label}
          {...item}
        />
      ))}

      <Separator
        orientation='vertical'
        className='h-6 bg-neutral-300'
      />
      <FontFamilyButton />
      <Separator
        orientation='vertical'
        className='h-6 bg-neutral-300'
      />
      {/* heading */}
      <Separator
        orientation='vertical'
        className='h-6 bg-neutral-300'
      />
      {/* font size */}
      <Separator
        orientation='vertical'
        className='h-6 bg-neutral-300'
      />
      {section[1].map((item) => (
        <ToolbarButton
          key={item.label}
          {...item}
        />
      ))}

      {/* todoColor */}
      {/* todoHighColor */}
      <Separator
        orientation='vertical'
        className='h-6 bg-neutral-300'
      />
      {/* todoLink */}
      {/* todo Image */}
      {/* todo align */}
      {/* todoList */}
      {section[2].map((item) => (
        <ToolbarButton
          key={item.label}
          {...item}
        />
      ))}
    </div>
  );
};

export default Toolbar;
