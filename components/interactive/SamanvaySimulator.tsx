'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  id: string;
  time: string;
  course: string;
  professor: string;
  batch: string;
  status: 'valid' | 'conflict' | 'empty';
  conflictReason?: string;
}

export function SamanvaySimulator() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>('slot-1');
  const [activeBatch, setActiveBatch] = useState<'MBA-A' | 'IPM-1'>('MBA-A');
  const [slots, setSlots] = useState<TimeSlot[]>([
    {
      id: 'slot-1',
      time: '09:00 AM - 10:30 AM',
      course: 'Financial Management',
      professor: 'Prof. R. Sharma',
      batch: 'MBA-A',
      status: 'valid',
    },
    {
      id: 'slot-2',
      time: '11:00 AM - 12:30 PM',
      course: 'Operations Research',
      professor: 'Prof. A. Kumar',
      batch: 'MBA-A',
      status: 'valid',
    },
    {
      id: 'slot-3',
      time: '02:00 PM - 03:30 PM',
      course: 'Marketing Strategy',
      professor: 'Prof. S. Verma',
      batch: 'MBA-A',
      status: 'conflict',
      conflictReason: 'Faculty unavailable (Leave constraint)',
    },
    {
      id: 'slot-4',
      time: '04:00 PM - 05:30 PM',
      course: 'Unassigned Open Slot',
      professor: 'None',
      batch: 'MBA-A',
      status: 'empty',
    },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const handleSlotClick = (id: string) => {
    setSelectedSlot(id);
    const slot = slots.find((s) => s.id === id);
    if (slot?.status === 'conflict') {
      setNotification(`Conflict Detected: ${slot.conflictReason}`);
    } else if (slot?.status === 'valid') {
      setNotification(`Valid Slot: ${slot.course} (${slot.professor}) is ready to reschedule.`);
    } else {
      setNotification('Open Slot: Available for lecture assignment without conflicts.');
    }
  };

  const handleResolveConflict = () => {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === 'slot-3'
          ? {
              ...s,
              professor: 'Prof. M. Gupta (Replacement)',
              status: 'valid',
              conflictReason: undefined,
            }
          : s
      )
    );
    setNotification('Constraint Resolved: Assigned replacement professor Prof. M. Gupta.');
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-sans space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <h4 className="text-sm font-bold text-zinc-100 font-mono uppercase tracking-wider">
              Interactive Timetable Rescheduling Engine
            </h4>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Click time slots to test real-time constraint validation & conflict resolution.
          </p>
        </div>

        {/* Batch Selector Tabs */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-lg text-xs font-mono">
          <button
            onClick={() => setActiveBatch('MBA-A')}
            className={`px-3 py-1 rounded transition-colors ${
              activeBatch === 'MBA-A'
                ? 'bg-zinc-800 text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            MBA Batch A
          </button>
          <button
            onClick={() => setActiveBatch('IPM-1')}
            className={`px-3 py-1 rounded transition-colors ${
              activeBatch === 'IPM-1'
                ? 'bg-zinc-800 text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            IPM Batch 1
          </button>
        </div>
      </div>

      {/* Slots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          const isConflict = slot.status === 'conflict';
          const isEmpty = slot.status === 'empty';

          return (
            <motion.div
              key={slot.id}
              onClick={() => handleSlotClick(slot.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'ring-2 ring-indigo-500 border-indigo-500 bg-zinc-900/90'
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-zinc-400">{slot.time}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    isConflict
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                      : isEmpty
                      ? 'bg-zinc-800 text-zinc-400'
                      : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                  }`}
                >
                  {isConflict ? 'Conflict' : isEmpty ? 'Open Slot' : 'Valid'}
                </span>
              </div>

              <div className="font-semibold text-sm text-zinc-100">{slot.course}</div>
              <div className="text-xs text-zinc-400 mt-1 flex items-center justify-between">
                <span>{slot.professor}</span>
                <span className="font-mono text-[11px] text-zinc-500">{slot.batch}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Real-time Constraint Feedback Box */}
      <AnimatePresence mode="wait">
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
          >
            <div className="text-zinc-300 leading-normal">{notification}</div>
            {slots.some((s) => s.status === 'conflict') && (
              <button
                onClick={handleResolveConflict}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-sans text-xs font-medium transition-colors shrink-0"
              >
                Auto-Assign Replacement
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
