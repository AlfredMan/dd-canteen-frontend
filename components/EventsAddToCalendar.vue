<template lang="html">
  <div class="">

    <a class="atc-link icon-google" target="_blank"
    :href="`https://www.google.com/calendar/render?action=TEMPLATE&amp;text=${summary}&amp;dates=${start}/${end}&amp;details=${description}&amp;location=${location}&amp;sprop=&amp;sprop=name:`">Google Calendar</a>

    <a class="atc-link icon-yahoo" target="_blank"
    :href="`http://calendar.yahoo.com/?v=60&amp;view=d&amp;type=10&amp;title=${summary}&amp;st=${start}&amp;dur=2359&amp;desc=${description}&amp;in_loc=${location}`">Yahoo! Calendar</a>

    <a class="atc-link icon-ical" target="_blank"
    :href="`data:text/calendar;charset=utf8,
    BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    URL:${url}
    DTSTART:${start}
    DTEND:${end}
    SUMMARY:${summary}
    DESCRIPTION:${description}
    LOCATION:${location}
    END:VEVENT
    END:VCALENDAR`"
    >iCal Calendar</a>

    <a class="atc-link icon-outlook" target="_blank"
    :href="`data:text/calendar;charset=utf8,
    BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    URL:${url}
    DTSTART:${start}
    DTEND:${end}
    SUMMARY:${summary}
    DESCRIPTION:${description}
    LOCATION:${location}
    END:VEVENT
    END:VCALENDAR`"
    >Outlook Calendar</a>

  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    start: {
      type: String,
      default: '' //20291231T210000Z
    },
    end: {
      type: String,
      default: '' //20291231T210000Z
    },
    summary: {
      type: String,
      default: '' //summary
    },
    description: {
      type: String,
      default: '' //description
    },
    location: {
      type: String,
      default: '' //location
    }
  }
}
</script>

<style lang="css">
</style>
